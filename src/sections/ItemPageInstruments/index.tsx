import StarRating from "../../components/StarRating";
import { Product } from "../../types/api.types";
import PriceLine from "./PriceLine";

interface ItemPageInstrumentsProps
  extends Omit<React.ComponentPropsWithoutRef<"article">, "children"> {
  product: Product | null;
  isLoading: boolean;
}

let ItemPageInstruments: React.FC<ItemPageInstrumentsProps> = ({
  className = "",
  isLoading,
  product,
  ...rest
}) => {
  if (isLoading) {
  }

  return (
    <article className={className} {...rest}>
      <h3 className="sr-only">Item properties</h3>
      <p className="font-integralcf text-xl font-bold">
        {product?.title || ""}
      </p>

      {/* Rating */}
      <div className="mt-3 flex items-center gap-1">
        <StarRating
          starContainerClassName="gap-1.5"
          className="h-5"
          rating={product?.rating || 0}
        ></StarRating>
        {(product?.rating || 0).toFixed(1)}/
        <span className="text-primary/60">5</span>
      </div>

      {/* Price */}
      <PriceLine
        discount={product?.discountPercentage || 0}
        price={product?.price || 0}
        className="mt-3"
      ></PriceLine>

      <p>{product?.description || ""}</p>
    </article>
  );
};

export default ItemPageInstruments;
