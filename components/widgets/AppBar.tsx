import { ModeSwitcher } from "@/components/plugins/theme/widgets/ModeSwitcher";
import Logo from "./Logo";

export const AppBar = () => (
  <header className="shadow-sm z-10 border-b border-secondary bg-background/90 sticky top-0 right-0 left-0 px-2 md:px-6 py-2">
    <div className="container mx-auto flex justify-between items-center">
      <Logo />
      <NavLinks />
      <ModeSwitcher />
    </div>
  </header>
);

// links t sections component
const NavLinks = () => (
  <nav className="hidden md:flex space-x-4 font-semibold text-sm">
    <a href="#home" className="hover:text-primary">
      Home
    </a>
    <a href="#services" className="hover:text-primary">
      Services
    </a>
    <a href="#about" className="hover:text-primary">
      About
    </a>
    <a href="#projects" className="hover:text-primary">
      Projects
    </a>
    <a href="#contact" className="hover:text-primary">
      Contact
    </a>
  </nav>
);

export default AppBar;
