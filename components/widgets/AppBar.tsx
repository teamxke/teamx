import { ModeSwitcher } from "@/components/plugins/theme/widgets/ModeSwitcher";
import Logo from "./Logo";

export const AppBar = () => (
  <header className="shadow-sm z-10 border-b border-secondary bg-background/90 sticky top-0 right-0 left-0 px-2 md:px-6 py-2">
    <div className="container mx-auto flex justify-between items-center">
      <Logo />
      <ModeSwitcher />
    </div>
  </header>
);

export default AppBar;
