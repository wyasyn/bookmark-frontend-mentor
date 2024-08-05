import { Menu, X } from "lucide-react";
import Logo from "./logo";
import { useData } from "@/context/toogle";
import NavList from "./NavList";
import DesktopList from "./DesktopList";

export default function Navbar() {
  const { open, toggleMenu } = useData();
  return (
    <header className={` ${open ? "bg-foreground/90" : "bg-background"}`}>
      <nav className=" container flex items-center justify-between py-4 md:py-8 ">
        <Logo />
        <DesktopList />
        <NavList />
        <button
          className={` md:hidden ${
            open ? "text-background" : "text-foreground"
          }  `}
          onClick={toggleMenu}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
    </header>
  );
}
