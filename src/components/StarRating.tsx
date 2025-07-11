import { tw } from "../utils/tailwindFunctions";

interface StarRatingProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  rating: number;
  starContainerClassName?: string;
  max?: number;
  bgColor?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  className = "",
  rating,
  starContainerClassName = "",
  max = 5,
  bgColor = "var(--color-star-yellow)",
  ...rest
}) => {
  const starClassName = tw`block aspect-square h-full mask-[url(/masks/star.svg)] mask-cover mask-no-repeat`;

  return (
    <div className={`${className}`} {...rest}>
      <div
        className={`pointer-events-none flex h-full w-full justify-between ${starContainerClassName}`}
      >
        {Array.from({ length: max }).map((_, i) => {
          if (rating - i >= 1) {
            return (
              <span
                key={i + "star"}
                className={`${starClassName}`}
                style={{ backgroundColor: bgColor }}
              />
            );
          }

          if (rating - i < 1 && rating - i > 0) {
            return (
              <div key={i + "half"} className="aspect-square h-full">
                <div
                  className="h-full w-full overflow-hidden"
                  style={{ width: `${(rating - i) * 100}%` }}
                >
                  <span
                    className={`${starClassName}`}
                    style={{ backgroundColor: bgColor }}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default StarRating;
