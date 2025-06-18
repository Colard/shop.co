import CartIcon from "../../assets/icons/CartIcon";
import DarkModeIcon from "../../assets/icons/DarkModeIcon";
import SVGButton from "../../components/SVGButton";
import { tw } from "../../utils/tailwindFunctions";

import ProductSearchButton from "../../components/ProductSearchButton";

interface InstrumentsProps {
  darkModeToggler: () => void;
}

let Instruments: React.FC<InstrumentsProps> = ({ darkModeToggler }) => {
  const buttonClassName = tw`hover:before:bg-primary/30 active:before:bg-primary/30 relative size-6 transform transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300 hover:scale-125 hover:before:scale-130 active:scale-125 active:before:scale-130`;

  return (
    <div className="flex items-center gap-3 md:contents md:gap-4">
      <ProductSearchButton className={buttonClassName} />

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
