import React from "react";
import StarRating from "./StarRating";
import { tw } from "../utils/tailwindFunctions";
import { Link } from "react-router-dom";
import useImageErrorHandler from "../hooks/useImageErrorHandler";
import { checkInStok } from "../utils/productsHeleprs";

interface ItemCardProps
  extends Omit<React.ComponentPropsWithoutRef<"article">, "children" | "id"> {
  id: number;
  thumbnail: string;
  rating: number;
  title: string;
  price: number;
  availabilityStatus: string;
  discountPercentage: number;
}

let ItemCard: React.FC<ItemCardProps> = ({
  id,
  className = "",
  thumbnail,
  rating,
  title,
  price,
  availabilityStatus,
  discountPercentage,
  ...rest
}) => {
  const { errorCallback, isLoadingError } = useImageErrorHandler();
  const errorImageClassName = tw`size-25 opacity-20`;
  const inStock = checkInStok(availabilityStatus);

  return (
    <article
      className={`${className} overflow-clip transition-all duration-300 ease-in-out hover:scale-90 active:scale-90 ${inStock ? "" : "opacity-60"}`}
      {...rest}
    >
      <Link
        to={`/product/${id}`}
        className="width-full block max-w-75 cursor-pointer transition-all duration-300"
      >
        <div className="bg-secondary flex aspect-square size-full items-center justify-center overflow-clip rounded-[1.25rem]">
          <img
            draggable={false}
            className={isLoadingError ? errorImageClassName : "size-full"}
            src={thumbnail}
            alt={title}
            onError={errorCallback}
          ></img>
        </div>
        <h3 className="line-clamp-2 text-lg font-bold wrap-anywhere">
          {title}
        </h3>
        <div className="my-1 flex w-full items-center gap-1 md:my-2">
          <StarRating
            starContainerClassName="gap-1.5"
            rating={+rating.toFixed(1)}
            className="h-5 w-auto"
          />
          <p className="text-primary text-sm">
            {rating.toFixed(1)}/<span className="text-primary/60">5</span>
          </p>
        </div>
        <Price price={price} discount={discountPercentage} />
      </Link>
    </article>
  );
};

interface PriceProps {
  price: number;
  discount: number;
}

let Price: React.FC<PriceProps> = ({ discount, price }) => {
  let priceLabel: React.ReactNode = null;
  if (discount > 0) {
    const priceWithDiscount = (price * ((100 - discount) / 100)).toFixed(2);
    priceLabel = (
      <>
        <p>${priceWithDiscount}</p>
        {price.toString().length > 7 || (
          <p className="text-old-price line-through">${price}</p>
        )}
        <div className="text-discount bg-discount/10 inline-flex items-center justify-center rounded-full px-2 py-1 text-xs font-medium md:px-2.5 md:py-1.5">
          <p>-{discount}%</p>
        </div>
      </>
    );
  } else {
    priceLabel = <p>${price}</p>;
  }

  return (
    <div className="text-card flex flex-wrap items-center gap-[5px] font-bold md:gap-[10px]">
      {priceLabel}
    </div>
  );
};

export default React.memo(ItemCard);
