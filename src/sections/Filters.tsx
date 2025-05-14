import React, { useEffect, useRef } from "react";
import { tw } from "../utils/tailwindFunctions";
import CloseIcon from "../assets/icons/CloseIcon";

interface FiltersProps
  extends Omit<React.ComponentPropsWithoutRef<"aside">, "children"> {
  closing?: () => void;
}

let Filters: React.FC<FiltersProps> = ({
  className = "",
  closing,
  ...rest
}) => {
  const headerText = tw`text-5 font-bold`;
  const renderCount = useRef(0);
  renderCount.current += 1;

  useEffect(() => {
    console.log(`Компонент був відрендерений ${renderCount.current} разів`);
  });

  return (
    <aside className={`${className} px-5 pt-5 pb-6 lg:px-6 lg:pb-7`} {...rest}>
      <div className="border-primary/10 flex justify-between border-b pb-4">
        <h2 className={`${headerText}`}>Filters</h2>{" "}
        <CloseIcon
          className="text-primary/40 size-4 cursor-pointer sm:hidden"
          onClick={closing}
        />
      </div>
    </aside>
  );
};

export default React.memo(Filters);
