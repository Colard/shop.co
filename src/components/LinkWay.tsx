import { Link } from "react-router-dom";
import LinkWayArrow from "../assets/icons/LinkWayArrow";
import React from "react";

interface LinkWayProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  pageName: string;
}

let LinkWay: React.FC<LinkWayProps> = ({
  pageName,
  className = "",
  ...rest
}) => {
  return (
    <div className={`${className} flex gap-1.5`} {...rest}>
      <Link
        className="hover:text-primary active:text-primary text-primary/60 transition-color flex items-baseline gap-1 duration-300"
        to="/"
      >
        Home
        <LinkWayArrow className="aspect-square h-[0.8em]"></LinkWayArrow>
      </Link>

      <p>{pageName}</p>
    </div>
  );
};

export default React.memo(LinkWay);
