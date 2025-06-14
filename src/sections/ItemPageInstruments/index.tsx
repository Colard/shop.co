import { useCallback } from "react";
import QuantitySelector from "../../components/QuantitySelector";
import StarRating from "../../components/StarRating";
import { Product } from "../../types/api.types";
import PriceLine from "./PriceLine";
import Button from "../../components/Button";

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

  const onChangeQuantity = useCallback((value: number) => {}, []);

  return (
    <article className={`flex flex-col ${className}`} {...rest}>
      <div className="flex-1">
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

        {/* Description */}
        <p className="text-base">{product?.description || ""}</p>

        <hr className="border-primary/10 my-6" />
      </div>

      <div className="mx-auto flex w-full justify-between gap-3 lg:gap-5">
        <QuantitySelector onChangeQuantity={onChangeQuantity} />
        <Button className="bg-primary text-bg-color max-w-100 flex-1">
          Add to Cart
        </Button>
      </div>
    </article>
  );
};

export default ItemPageInstruments;
