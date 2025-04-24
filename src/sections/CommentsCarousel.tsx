import React, { useState } from "react";
import useProductsApi from "../hooks/userProductsApi";
import { Review } from "../types/api.types";
import CommentBlock from "../components/CommentBlock";
import Container from "../components/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

type unbluredRangeType = (
  activeIndex: number,
  neighborsCount: number,
  elementsCount: number,
) => number[];

const unbluredRange: unbluredRangeType = (
  activeIndex,
  neighborsCount,
  elementsCount,
) => {
  const indexes: number[] = [];

  for (let i = -neighborsCount; i <= neighborsCount; i++) {
    const index = (activeIndex + i + elementsCount) % elementsCount;
    indexes.push(index);
  }

  return indexes;
};

const carouselSettings = {
  centerMode: true,
  infinite: true,
  centerPadding: "100px",
  slidesToShow: 3,
  speed: 500,
  arrows: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        centerPadding: "200px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "120px",
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
};

interface CommentsCarouselProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {}

const CommentsCarousel: React.FC<CommentsCarouselProps> = ({
  className,
  ...rest
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const { products, loadMore } = useProductsApi({
    select: ["reviews"],
    limit: 8,
  });
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (!isMounted.current) {
      loadMore();
      isMounted.current = true;
    }
  }, []);

  React.useEffect(() => {
    setReviews(products.map((item) => item.reviews[0]));
  }, [products]);

  const range = unbluredRange(activeIndex, 1, reviews.length);

  return (
    <section className={`${className}`} {...rest}>
      <Container>
        <h2 className="font-integralcf text-primary mb-6 text-3xl md:mb-10">
          OUR HAPPY CUSTOMERS
        </h2>
      </Container>

      <Slider
        {...carouselSettings}
        beforeChange={(_current, next) => {
          setActiveIndex(next);
        }}
      >
        {reviews.map((item, index) => (
          <div className="px-2.5">
            <CommentBlock
              key={index}
              rating={item.rating}
              name={item.reviewerName}
              text={item.comment}
              className={`aspect-aspect-[100/48] mx-auto h-full min-h-40 w-full p-6 transition-all duration-700 select-none ${
                range.includes(index) ? "blur-none" : "blur-[2px]"
              } `}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CommentsCarousel;
