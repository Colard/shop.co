import React from "react";
import Container from "../../components/Container";
import useDarkMode from "../../hooks/useDarkMode";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import NavBar from "./NavBar";
import Instruments from "./Instruments";

const links = [
  {
    name: "Shop",
    path: "/",
  },
  {
    name: "On Sale",
    path: "/",
  },
  {
    name: "New Arrivals",
    path: "/",
  },
  {
    name: "Collections",
    path: "/",
  },
];

interface HeaderProps
  extends Omit<React.ComponentPropsWithoutRef<"header">, "children"> {}

const Header: React.FC<HeaderProps> = ({ className = "", ...rest }) => {
  const [isMenuOpened, setMenuOpened] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpened(!isMenuOpened);
  };

  const darkModeToggler = useDarkMode();

  return (
    <header
      className={`h-header md:h-md-header bg-bg-color top-0 z-50 ${className}`}
      {...rest}
    >
      <Container className="flex items-center justify-between">
        <div className="flex h-full items-center lg:gap-10">
          <nav className="h-full lg:order-1 lg:h-auto">
            <NavBar isOpen={isMenuOpened} links={links} />
          </nav>

          <BurgerMenu isActive={isMenuOpened} onClick={toggleMenu} />

          <Logo />
        </div>
        <Instruments darkModeToggler={darkModeToggler}></Instruments>
      </Container>
    </header>
  );
};

let Logo: React.FC = () => {
  return (
    <Link to="/" className="font-integralcf text-logo z-20 -mt-2 select-none">
      SHOP.CO
    </Link>
  );
};

export default Header;
