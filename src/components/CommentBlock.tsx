import VerificationMark from "../assets/icons/VerificationMark";
import StarRating from "./StarRating";

interface CommentProps
  extends Omit<React.ComponentPropsWithoutRef<"article">, "children"> {
  rating?: number;
  name?: string;
  text?: string;
}

let Comment: React.FC<CommentProps> = ({
  rating,
  name,
  text,
  className = "",
  ...rest
}) => {
  return (
    <article
      className={`${className} border-primary/10 h-full max-h-60 max-w-100 rounded-[1.25rem] border-1`}
      {...rest}
    >
      <div className="w-max">
        <StarRating
          rating={rating || 0}
          className="h-5 w-auto"
          starContainerClassName="gap-1.5"
        />
      </div>
      <p className="mt-3 mb-2 flex items-center gap-1 text-lg font-bold">
        {name}
        <VerificationMark className="text-green aspect-square h-auto max-h-5 w-auto" />
      </p>
      <p className="base-text">{text}</p>
    </article>
  );
};

export default Comment;
