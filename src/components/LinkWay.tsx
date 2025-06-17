import { Link } from "react-router-dom";
import LinkWayArrow from "../assets/icons/LinkWayArrow";
import React, { Fragment } from "react";
import { TLinkWayPath } from "../types/componentsProps.types";

interface LinkWayProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  pagePath: TLinkWayPath[];
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
    <nav
      className={`${className} base-text flex flex-wrap items-baseline gap-1.5`}
      {...rest}
    >
      {fullPagePath.map((item, index) => (
        <Fragment key={index}>
          {index > 0 && <LinkWayArrow className="aspect-square h-[0.8em]" />}
          <LinkWayElement pagePath={item} />
        </Fragment>
      ))}
    </nav>
  );
};

interface LinkWayElementProps {
  pagePath: TLinkWayPath;
}

let LinkWayElement: React.FC<LinkWayElementProps> = ({ pagePath }) => {
  const unActiveClassName = "cursor-default text-primary";
  if (typeof pagePath === "string") {
    return <span className={`${unActiveClassName}`}>{pagePath}</span>;
  }

  if (!pagePath.path) {
    return <span className={`${unActiveClassName}`}>{pagePath.name}</span>;
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
