import React from "react";
import StarRating from "./StarRating";
import loading from "../assets/images/load-icon.png";

interface LoadingCardProps
  extends Omit<React.ComponentPropsWithoutRef<"article">, "children" | "id"> {}

let LoadingCard: React.FC<LoadingCardProps> = ({ className = "", ...rest }) => {
  return (
    <div
      className={`${className} w-full max-w-75 animate-pulse select-none`}
      {...rest}
    >
      <div className="bg-secondary flex aspect-square w-full items-center justify-center rounded-[1.25rem]">
        <img
          draggable={false}
          className={"animate-loadingSpin size-25 origin-center"}
          src={loading}
          alt={"loading..."}
        ></img>
      </div>

      <h3 className="bg-primary/10 mt-1 line-clamp-2 rounded-xl text-lg font-bold wrap-anywhere md:mt-2">
        &nbsp;
      </h3>
      <div className="flex w-full items-center">
        <StarRating
          starContainerClassName="gap-1.5"
          rating={5}
          className="my-0.5 h-5 w-auto md:my-1"
          bgColor="var(--color-primary)"
          style={{ opacity: 0.1 }}
        />
      </div>
      <p className="text-card bg-primary/10 w-full rounded-xl">&nbsp;</p>
    </div>
  );
};

export default LoadingCard;
