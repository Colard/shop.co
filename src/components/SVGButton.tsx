import { MouseEventHandler } from "react";

interface SVGButtonProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  onClick?: MouseEventHandler;
  svg: React.ReactNode;
}

let SVGButton: React.FC<SVGButtonProps> = ({
  svg,
  className,
  onClick,
  ...rest
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center select-none ${
        className || ""
      }`}
      {...rest}
    >
      {svg}
    </div>
  );
};

export default SVGButton;
