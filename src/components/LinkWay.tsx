import { Link } from "react-router-dom";
import LinkWayArrow from "../assets/icons/LinkWayArrow";
import React from "react";

interface TPagePathElemnt {
  name: string;
  path?: string;
}

interface LinkWayProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  pagePath: (TPagePathElemnt | string)[];
}

let LinkWay: React.FC<LinkWayProps> = ({
  pagePath,
  className = "",
  ...rest
}) => {
  const fullPagePath = [
    {
      name: "Home",
      path: "/",
    },
    ...pagePath,
  ];

  return (
    <div
      className={`${className} text-primary/60 flex items-baseline gap-1.5`}
      {...rest}
    >
      {fullPagePath.map((item, index) => (
        <span key={index} className="flex items-baseline gap-1.5">
          {index > 0 && <LinkWayArrow className="aspect-square h-[0.8em]" />}
          <LinkWayElement pagePath={item} />
        </span>
      ))}
    </div>
  );
};

interface LinkWayElementProps {
  pagePath: TPagePathElemnt | string;
}

let LinkWayElement: React.FC<LinkWayElementProps> = ({ pagePath }) => {
  const unActiveClassName = "cursor-default text-primary";
  if (typeof pagePath === "string") {
    return <p className={`${unActiveClassName}`}>{pagePath}</p>;
  }

  if (!pagePath.path) {
    return <p className={`${unActiveClassName}`}>{pagePath.name}</p>;
  }

  return (
    <Link
      to={pagePath.path}
      className={
        "hover:text-primary active:text-primary transition-color duration-300"
      }
    >
      {pagePath.name}
    </Link>
  );
};

export default React.memo(LinkWay);
