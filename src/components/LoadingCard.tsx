import React from "react";
import StarRating from "./StarRating";
import LoadingImage from "./LoadingImage";
import LoadingTextBlank from "./LoadingTextBlank";

interface LoadingCardProps
  extends Omit<React.ComponentPropsWithoutRef<"article">, "children" | "id"> {}

let LoadingCard: React.FC<LoadingCardProps> = ({ className = "", ...rest }) => {
  return (
    <div
      className={`${className} w-full max-w-75 animate-pulse select-none`}
      {...rest}
    >
      <LoadingImage className="aspect-square w-full rounded-[1.25rem]" />

      <LoadingTextBlank className="mt-1 line-clamp-2 text-lg font-bold wrap-anywhere md:mt-2" />

      <div className="flex w-full items-center">
        <StarRating
          starContainerClassName="gap-1.5"
          rating={5}
          className="my-0.5 h-5 w-auto md:my-1"
          bgColor="var(--color-primary)"
          style={{ opacity: 0.1 }}
        />
      </div>
      <LoadingTextBlank className="text-card" />
    </div>
  );
};

export default LoadingCard;
