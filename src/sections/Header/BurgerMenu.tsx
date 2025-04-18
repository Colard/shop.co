import { tw } from "../../utils/tailwindFunctions";

interface BurgerMenuProps {
  isActive: boolean;
  onClick: () => void;
}

let BurgerMenu: React.FC<BurgerMenuProps> = ({ isActive, onClick }) => {
  const burgerClassName = tw`relative z-20 mr-4 flex size-4 cursor-pointer items-center justify-center transition-all duration-300 lg:hidden`;
  const spanClass = tw`bg-primary absolute h-0.5 w-full rounded transition-all duration-300`;

  return (
    <div
      onClick={onClick}
      className={`${burgerClassName} ${isActive ? "rotate-y-180" : ""}`}
    >
      <span
        className={`${spanClass} ${isActive ? "rotate-45" : "-translate-y-1.5"}`}
      ></span>
      <span className={`${spanClass} ${isActive ? "opacity-0" : ""}`}></span>
      <span
        className={`${spanClass} ${isActive ? "-rotate-45" : "translate-y-1.5"} `}
      ></span>
    </div>
  );
};

export default BurgerMenu;
