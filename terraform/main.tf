provider "azurerm" {
  features {}
  subscription_id = "bd7e6c6b-cbdc-4f66-88de-ca0bd9951ffe"
}

resource "azurerm_resource_group" "webapp_rg" {
  name     = "team_x_webapp"
  location = "Southeast Asia"
}

resource "azurerm_container_registry" "acr" {
  name                = "teamxui"
  resource_group_name = azurerm_resource_group.webapp_rg.name
  location            = azurerm_resource_group.webapp_rg.location
  sku                 = "Basic"
  admin_enabled       = true
}

resource "azurerm_container_group" "teamx_container_group" {
  name                = "teamx-container-group"
  location            = azurerm_resource_group.webapp_rg.location
  resource_group_name = azurerm_resource_group.webapp_rg.name
  os_type             = "Linux"

  container {
    name   = "teamx"
    image  = "${azurerm_container_registry.acr.login_server}/teamx:latest"
    cpu    = "0.5"
    memory = "1.5"

    ports {
      port     = 80
      protocol = "TCP"
    }

    ports {
      port     = 3000
      protocol = "TCP"
    }

    environment_variables = {
      NODE_ENV = "production"
    }
  }

  ip_address {
    type = "Public"

    ports {
      port     = 80
      protocol = "TCP"
    }

    ports {
      port     = 3000
      protocol = "TCP"
    }
  }

  image_registry_credential {
    server   = azurerm_container_registry.acr.login_server
    username = azurerm_container_registry.acr.admin_username
    password = azurerm_container_registry.acr.admin_password
  }
}
