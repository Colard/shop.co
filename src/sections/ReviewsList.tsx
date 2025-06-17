import Comment from "../components/CommentBlock";
import { Review } from "../types/api.types";

interface ReviewsListProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {
  reviews: Review[];
}

let ReviewsList: React.FC<ReviewsListProps> = ({
  className = "",
  reviews,
  ...rest
}) => {
  if (reviews.length === 0)
    return (
      <p className={`base-text text-center text-xl font-bold ${className}`}>
        No reviews yet.
      </p>
    );

  return (
    <section className={`flex flex-col gap-5 ${className}`} {...rest}>
      <h2 className="sr-only">Reviews</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {reviews.map((review, i) => (
          <Comment
            className="w-full p-6 md:p-8"
            key={i}
            rating={review.rating}
            text={review.comment}
            name={review.reviewerName}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewsList;
