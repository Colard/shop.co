import React from "react";
import ItemsScroll from "./ItemsScroll";
import { Product } from "../types/api.types";
import ItemCard from "./ItemCard";
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
  return (
    <div className={`${className}`} {...rest}>
      <h2 className="font-integralcf text-primary mb-14 text-center text-3xl">
        {header}
      </h2>
      <ItemsScroll
        extractKey={(item) => item.id}
        elements={products}
        renderFunction={(item) => (
          <ItemCard key={item.id} {...item} className="flex-1" />
        )}
      ></ItemsScroll>
    </div>
  );
};

export default ItemsLine;
