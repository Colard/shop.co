import CartIcon from "../../assets/icons/CartIcon";
import DarkModeIcon from "../../assets/icons/DarkModeIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import SVGButton from "../../components/SVGButton";
import { tw } from "../../utils/tailwindFunctions";

interface InstrumentsProps {
  darkModeToggler: () => void;
}

let Instruments: React.FC<InstrumentsProps> = ({ darkModeToggler }) => {
  const buttonClassName = tw`hover:before:bg-primary/30 active:before:bg-primary/30 relative size-6 transform transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300 hover:scale-125 hover:before:scale-130 active:scale-125 active:before:scale-130`;

  return (
    <div className="flex items-center gap-3 md:contents md:gap-4">
      <div className="md:bg-secondary mx-10 contents h-12 flex-1 items-center rounded-full px-4 md:flex">
        <SVGButton
          svg={<SearchIcon />}
          className={`${buttonClassName} md:opacity-40 md:transition-none md:duration-0 md:before:hidden md:hover:scale-100 md:active:scale-100`}
        ></SVGButton>
        <input
          className="placeholder:text-primary/40 hidden w-full px-3 outline-none md:block"
          placeholder="Search for products..."
        ></input>
      </div>

      <SVGButton svg={<CartIcon />} className={buttonClassName}></SVGButton>

      <SVGButton
        svg={<DarkModeIcon />}
        className={`${buttonClassName} md:ml-3`}
        onClick={darkModeToggler}
      ></SVGButton>
    </div>
  );
};

export default Instruments;
