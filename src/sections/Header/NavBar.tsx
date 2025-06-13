import { Link } from "react-router-dom";
import { tw } from "../../utils/tailwindFunctions";
import { useEffect, useRef } from "react";
import { headerLinks } from "../../constants";
import useClickOutside from "../../hooks/useClickOutside";

interface NavLinkProps {
  isOpen: boolean;
  closeMenu: () => void;
}

let NavBar: React.FC<NavLinkProps> = ({ isOpen, closeMenu }) => {
  const ulClassName = tw`bg-secondary pt-header md:pt-md-header visible fixed h-full gap-4 text-base transition-[left] duration-300 lg:static lg:flex lg:bg-transparent lg:pt-0 lg:shadow-none`;
  const linkClassName = tw`w-side-menu relative origin-left cursor-pointer py-3 pl-8 transition-all duration-200 hover:scale-120 hover:transform hover:text-shadow-[1px_0_0_currentColor] active:scale-120 active:transform active:text-shadow-[1px_0_0_currentColor] lg:w-auto lg:origin-center lg:pl-0`;

  const menuRef = useRef<HTMLUListElement>(null);
  const burgerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    burgerRef.current = document.getElementById("header-burger");
  }, []);

  useClickOutside(menuRef, closeMenu, [burgerRef]);

  return (
    <ul
      ref={menuRef}
      className={`${ulClassName} ${isOpen ? "left-0 shadow-2xl" : "-left-side-menu"}`}
    >
      {headerLinks.map((link, id) => (
        <Link to={link.path} key={id} onClick={closeMenu}>
          <li className={linkClassName}>{link.name}</li>{" "}
          <hr className="border-primary/30 mr-5 border-1 lg:hidden"></hr>
        </Link>
      ))}
    </ul>
  );
};

export default NavBar;
