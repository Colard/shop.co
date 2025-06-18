import React, { useCallback } from "react";
import Container from "../../components/Container";
import BurgerMenu from "./BurgerMenu";
import NavBar from "./NavBar";
import Instruments from "./Instruments";
import Logo from "../../components/Logo";

interface HeaderProps
  extends Omit<React.ComponentPropsWithoutRef<"header">, "children"> {}

const Header: React.FC<HeaderProps> = ({ className = "", ...rest }) => {
  const [isMenuOpened, setMenuOpened] = React.useState(false);

  const toggleMenu = useCallback(() => setMenuOpened((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpened(false), []);

  return (
    <header
      className={`h-header md:h-md-header bg-bg-color top-0 z-50 ${className}`}
      {...rest}
    >
      <Container className="border-b-primary/10 flex items-center justify-between border-b">
        <div className="flex h-full items-center lg:gap-10">
          <nav className="h-full lg:order-1 lg:h-auto">
            <NavBar isOpen={isMenuOpened} closeMenu={closeMenu} />
          </nav>

          <BurgerMenu
            isActive={isMenuOpened}
            onClick={toggleMenu}
            id="header-burger"
          />

          <Logo className="z-20 -mt-2" />
        </div>
        <Instruments />
      </Container>
    </header>
  );
};

export default Header;
