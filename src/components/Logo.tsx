import { Link } from "react-router-dom";

interface LogoProps
  extends Omit<React.ComponentPropsWithoutRef<"a">, "children"> {}

let Logo: React.FC<LogoProps> = ({ className, ...rest }) => {
  return (
    <Link
      to="/"
      className={`font-integralcf text-logo select-none ${className || ""}`}
      {...rest}
    >
      SHOP.CO
    </Link>
  );
};

export default Logo;
