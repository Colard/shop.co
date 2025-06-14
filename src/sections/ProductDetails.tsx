import { Product } from "../types/api.types";

interface ProductDetailsProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {
  product: Product;
}

let ProductDetails: React.FC<ProductDetailsProps> = ({
  className = "",
  product,
  ...rest
}) => {
  return (
    <section className={` ${className}`} {...rest}>
      <h2>Product Details</h2>
      <div>{product.description}</div>
    </section>
  );
};

export default ProductDetails;
