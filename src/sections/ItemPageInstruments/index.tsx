import StarRating from "../../components/StarRating";
import { Product } from "../../types/api.types";
import PriceLine from "./PriceLine";
import InstrumentsFooter from "./InstrumentsFooter";
import LoadingTextBlank from "../../components/LoadingTextBlank";

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
    return <ItemPageInstrumentsLoading />;
  }

  return (
    <article className={`flex w-full flex-col ${className}`} {...rest}>
      <div className="flex-1">
        <h3 className="sr-only">Item properties</h3>

        {/* Title */}
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

      <InstrumentsFooter product={product} />
    </article>
  );
};

export default ItemPageInstruments;

interface ItemPageInstrumentsLoadingProps
  extends Omit<React.ComponentPropsWithoutRef<"article">, "children"> {}

const ItemPageInstrumentsLoading: React.FC<ItemPageInstrumentsLoadingProps> = ({
  className = "",
  ...rest
}) => {
  return (
    <article
      className={`flex w-full animate-pulse flex-col ${className}`}
      {...rest}
    >
      <h3 className="sr-only">Item properties</h3>
      {/* Title */}
      <LoadingTextBlank className="font-integralcf mb-2 text-xl font-bold" />
      {/* Rating */}
      <LoadingTextBlank className="h-7"></LoadingTextBlank>
      {/* Price */}
      <LoadingTextBlank className="text-item-price my-2" />
      {/* Description */}
      <LoadingTextBlank className="text-base" />
      <hr className="border-primary/10 my-6" />
    </article>
  );
};
