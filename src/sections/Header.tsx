import React from "react";
import CartIcon from "../assets/icons/CartIcon";
import DarkModeIcon from "../assets/icons/DarkModeIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import Container from "../components/Container";
import SVGButton from "../components/SVGButton";

let Header: React.FC = () => {

  return (
    <header className="h-(--header-h) md:h-(--md-header-h)">
      <Container className="inline-flex justify-between items-center">
        <div className="flex items-center gap-4 lg:gap-10 h-full">
          <nav className="lg:order-1 h-full lg:h-auto">
            <ul
              className="visible left-0 bg-secondary shadow-2xl lg:shadow-none h-full fixed  lg:static lg:flex gap-4
             text-base lg:bg-transparent pt-(--header-h) md:pt-(--md-header-h) lg:pt-0"
            >
              <a href="#">
                <li
                  className="cursor-pointer pl-8 w-60 origin-left lg:pl-0 lg:w-auto lg:origin-center 
                py-3 transition-all duration-200 hover:text-shadow-[1px_0_0_currentColor] relative
                hover:transform hover:scale-120 "
                >
                  Shop
                </li>{" "}
                <hr className="border-primary/30 border-1 mr-5 lg:hidden"></hr>
              </a>
              <a href="#">
                <li className="cursor-pointer pl-8 w-60 origin-left lg:pl-0 lg:w-auto lg:origin-center py-3 
                transition-all duration-200  hover:text-shadow-[1px_0_0_currentColor]  hover:transform hover:scale-120">
                  On Sale
                </li>
                <hr className="border-primary/30 border-1 mr-5 lg:hidden"></hr>
              </a>
              <a href="#">
                <li className="cursor-pointer pl-8 w-60 origin-left lg:pl-0 lg:w-auto lg:origin-center py-3 
                transition-all duration-200  hover:text-shadow-[1px_0_0_currentColor]  hover:transform hover:scale-120">
                  New Arrivals
                </li>{" "}
                <hr className="border-primary/30 border-1 mr-5 lg:hidden"></hr>
              </a>
              <a href="#">
                <li className="cursor-pointer pl-8 w-60 origin-left lg:pl-0 lg:w-auto lg:origin-center py-3 
                transition-all duration-200  hover:text-shadow-[1px_0_0_currentColor]  hover:transform hover:scale-120">
                  Brands
                </li>{" "}
                <hr className="border-primary/30 border-1 mr-5 lg:hidden"></hr>
              </a>
            </ul>
          </nav>
          <div className="size-5 lg:hidden flex flex-col justify-around cursor-pointer z-20 relative">
            <span className="block w-[90%] h-0.5 bg-black rounded"></span>
            <span className="block w-[90%] h-0.5 bg-black rounded"></span>
            <span className="block w-[90%] h-0.5 bg-black rounded"></span>
          </div>
          <a
            href="/"
            className="font-integralcf select-none text-logo -mt-1.5 z-20"
          >
            SHOP.CO
          </a>
        </div>

        <div className="flex gap-3 items-center md:contents">
          <div className="contents md:flex rounded-full md:bg-secondary flex-1 mx-10 h-12 items-center px-4">
            <SVGButton
              svg={<SearchIcon />}
              className="size-6 transition-all duration-300 transform 
            hover:scale-125 relative before:absolute before:inset-0 before:rounded-full
            hover:before:bg-primary/30 hover:before:scale-130 before:transition-all 
            before:duration-300 md:transition-none md:duration-0 md:hover:scale-100 md:before:hidden
            md:opacity-40"
            ></SVGButton>{" "}
            <input
              className="hidden md:block outline-none px-3 w-full"
              placeholder="Search for products..."
            ></input>
          </div>
          <SVGButton
            svg={<CartIcon />}
            className="size-6 transition-all duration-300 transform 
            hover:scale-125 relative before:absolute before:inset-0 before:rounded-full
            hover:before:bg-primary/30 hover:before:scale-130 before:transition-all 
            before:duration-300"
          ></SVGButton>
          <SVGButton
            svg={<DarkModeIcon />}
            className="size-6 transition-all duration-300 transform 
            hover:scale-125 relative before:absolute before:inset-0 before:rounded-full
            hover:before:bg-primary/30 hover:before:scale-130 before:transition-all 
            before:duration-300 md:ml-3"
          ></SVGButton>
        </div>
      </Container>
    </header>
  );
};

export default Header;
