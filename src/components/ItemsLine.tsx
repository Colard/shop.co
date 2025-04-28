import React from "react";
import ItemsScroll from "./ItemsScroll";
import { Product } from "../types/api.types";
import ItemCard from "./ItemCard";
import LoadingCard from "./LoadingCard";
interface ItemsLineProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  header: string;
  products: Product[];
}

let ItemsLine: React.FC<ItemsLineProps> = ({
  className = "",
  header,
  products,
  ...rest
}) => {
  let scrollContent: React.ReactElement | null = null;

  if (products.length) {
    scrollContent = (
      <ItemsScroll
        extractKey={(item) => item.id}
        elements={products}
        renderFunction={(item) => <ItemCard {...item} className="flex-1" />}
      ></ItemsScroll>
    );
  } else {
    scrollContent = (
      <ItemsScroll
        elements={Array.from({ length: 4 })}
        renderFunction={() => <LoadingCard className="flex-1" />}
      ></ItemsScroll>
    );
  }

  return (
    <div className={`${className}`} {...rest}>
      <h2 className="font-integralcf text-primary mb-14 text-center text-3xl">
        {header}
      </h2>{" "}
      {scrollContent}
    </div>
  );
};

export default ItemsLine;
