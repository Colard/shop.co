import React, { useEffect } from "react";
import { Product } from "../api/api.types";

interface ItemsLineProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  header: string;
}

let NewArrivals: React.FC<ItemsLineProps> = ({
  className = "",
  header,
  ...rest
}) => {
  const [product, setProduct] = React.useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);
  console.log(product);
  return (
    <div className={`my-class ${className}`} {...rest}>
      <h2 className="font-integralcf text-primary text-3xl">{header}</h2>
    </div>
  );
};

export default NewArrivals;
