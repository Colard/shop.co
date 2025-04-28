import React, { SyntheticEvent } from "react";
import StarRating from "./StarRating";
import altImage from "../assets/images/error-image-photo-icon.png";
import { tw } from "../utils/tailwindFunctions";

interface ItemCardProps
  extends Omit<React.ComponentPropsWithoutRef<"article">, "children" | "id"> {
  id: number;
  thumbnail: string;
  rating: number;
  title: string;
  price: number;
  discountPercentage: number;
}

let ItemCard: React.FC<ItemCardProps> = ({
  id,
  className = "",
  thumbnail,
  rating,
  title,
  price,
  discountPercentage,
  ...rest
}) => {
  const errorImageClassName = tw`size-25 opacity-20`;

  const imageErrorHandle = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = altImage;
    target.className = errorImageClassName;
  };

  return (
    <article
      className={`${className} overflow-clip transition-all duration-300 ease-in-out hover:scale-90`}
      {...rest}
    >
      <a className="width-full block max-w-75 min-w-50 cursor-pointer transition-all duration-300">
        <div className="bg-secondary flex aspect-square size-full items-center justify-center overflow-clip rounded-[1.25rem]">
          <img
            draggable={false}
            className={"size-full"}
            src={thumbnail}
            alt={title}
            onError={imageErrorHandle}
          ></img>
        </div>
        <h3 className="line-clamp-2 text-lg font-bold wrap-anywhere">
          {title}
        </h3>
        <div className="flex w-full items-center gap-1">
          <StarRating
            starContainerClassName="gap-1.5"
            rating={+rating.toFixed(1)}
            className="my-1 h-5 w-auto md:my-2"
          />
          <p className="text-primary text-sm">
            {rating.toFixed(1)}/<span className="text-primary/60">5</span>
          </p>
        </div>
        <Price price={price} discount={discountPercentage} />
      </a>
    </article>
  );
};

interface PriceProps {
  price: number;
  discount: number;
}

let Price: React.FC<PriceProps> = ({ discount, price }) => {
  let priceLabel;
  discount = Math.floor(+discount);

  // !!! ADDED FOR TESTING WITH API !!!
  if (discount >= 10) {
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
