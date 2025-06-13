import React from "react";
import ItemsScroll from "./ItemsScroll";
import { Product } from "../types/api.types";
import ItemCard from "./ItemCard";
import LoadingCard from "./LoadingCard";
interface ItemsLineProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  header: string;
  products: Product[];
  isLoading: boolean;
}

let ItemsLine: React.FC<ItemsLineProps> = ({
  className = "",
  header,
  products,
  isLoading,
  ...rest
}) => {
  return (
    <div className={`${className}`} {...rest}>
      <h2 className="font-integralcf text-primary mb-14 text-center text-3xl">
        {header}
      </h2>
      <ScrollContent products={products} isLoading={isLoading} />
    </div>
  );
};

interface ScrollContentProps {
  products: Product[];
  isLoading: boolean;
}

let ScrollContent: React.FC<ScrollContentProps> = ({ products, isLoading }) => {
  if (isLoading) {
    return (
      <ItemsScroll
        elements={Array.from({ length: 4 })}
        renderFunction={() => <LoadingCard className="min-w-50 flex-1" />}
      ></ItemsScroll>
    );
  }

  if (products.length) {
    <ItemsScroll
      extractKey={(item) => item.id}
      elements={products}
      renderFunction={(item) => (
        <ItemCard {...item} className="min-w-50 flex-1" />
      )}
    ></ItemsScroll>;
  }

  if (!products.length) {
    return (
      <p className="text-primary/40 col-span-2 w-full py-8 text-center text-3xl font-bold lg:col-span-3">
        No products found.
      </p>
    );
  }

  return <></>;
};

export default ItemsLine;
