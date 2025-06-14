import React from "react";
import { useEffect, useState } from "react";
import MinusIcon from "../assets/icons/MinusIcon";
import PlusIcon from "../assets/icons/PlusIcon";

interface QuantitySelectorProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  onChangeQuantity?: (value: number) => void;
}

let QuantitySelector: React.FC<QuantitySelectorProps> = ({
  className = "",
  onChangeQuantity,
  ...rest
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (onChangeQuantity) onChangeQuantity(value);
  }, [value, onChangeQuantity]);

  const clickBtn = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const element = e.currentTarget;
    element.classList.remove("animate-pop");
    void element.offsetWidth;
    element.classList.add("animate-pop");
  };

  const clickMinus = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    clickBtn(e);
    setValue((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const clickPlus = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    clickBtn(e);
    setValue((prev) => prev + 1);
  };

  return (
    <div
      className={`w-quantity-selector bg-secondary flex justify-between rounded-full px-4 py-3 lg:px-4 lg:py-3 ${className}`}
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
