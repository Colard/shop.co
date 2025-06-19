import React from "react";
import MinusIcon from "../assets/icons/MinusIcon";
import PlusIcon from "../assets/icons/PlusIcon";

interface QuantitySelectorProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  value?: number;
  onChangeQuantity?: (value: number) => void;
}

let QuantitySelector: React.FC<QuantitySelectorProps> = ({
  className = "",
  onChangeQuantity,
  value = 0,
  ...rest
}) => {
  const clickBtn = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const element = e.currentTarget;
    element.classList.remove("animate-pop");
    void element.offsetWidth;
    element.classList.add("animate-pop");
  };

  const clickMinus = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    clickBtn(e);
    if (onChangeQuantity) onChangeQuantity(value - 1);
  };

  const clickPlus = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    clickBtn(e);
    if (onChangeQuantity) onChangeQuantity(value + 1);
  };

  return (
    <div
      className={`w-quantity-selector bg-secondary flex justify-between rounded-full px-4 py-3 lg:px-5 lg:py-4 ${className}`}
      {...rest}
    >
      <button className="cursor-pointer" onClick={clickMinus}>
        <MinusIcon className="size-5 lg:size-6" />
      </button>
      <div>{value}</div>
      <button className="cursor-pointer" onClick={clickPlus}>
        <PlusIcon className="size-5 lg:size-6" />
      </button>
    </div>
  );
};

export default React.memo(QuantitySelector);
