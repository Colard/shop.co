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
      className={`flex items-center justify-center cursor-pointer ${className || ""}`}
      {...rest}
    >
      {svg}
    </div>
  );
};

export default SVGButton;
