import React, { useState } from "react";
import { Review } from "../types/api.types";
import CommentBlock from "../components/CommentBlock";
import Container from "../components/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import ArrowIcon from "../assets/icons/ArrowIcon";
import useProductsApiSimulation from "../api/useProductsApiSimultion";

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
  speed: 200,
  touchThreshold: 100,
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
  const { response, loading } = useProductsApiSimulation({
    select: ["reviews"],
    limit: 8,
  });
  const products = response?.products || [];

  const slider = React.useRef<Slider>(null);

  React.useEffect(() => {
    setReviews(products.map((item) => item.reviews[0]));
  }, [response]);

  const range = unbluredRange(activeIndex, 1, reviews.length);

  let nextSlide = () => {
    if (slider.current) {
      slider.current.slickNext();
    }
  };

  let prevSlide = () => {
    if (slider.current) {
      slider.current.slickPrev();
    }
  };

  return (
    <section className={`${className}`} {...rest}>
      <Container className="mb-6 flex justify-between sm:gap-20 md:mb-20">
        <h2 className="font-integralcf text-primary text-3xl">
          OUR HAPPY CUSTOMERS
        </h2>

        {!loading && reviews.length >= 2 && (
          <div className="flex gap-4 self-end">
            <ArrowIcon
              className="cursor-pointer select-none hover:opacity-70 active:opacity-70"
              onClick={prevSlide}
            ></ArrowIcon>
            <ArrowIcon
              className="scale-x-[-1] cursor-pointer select-none hover:opacity-70 active:opacity-70"
              onClick={nextSlide}
            ></ArrowIcon>
          </div>
        )}
      </Container>

      <CommentsCarouselALternate
        isLoading={loading}
        contentSize={reviews.length}
      >
        <Slider
          ref={slider}
          className="min-h-40"
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
                className={`aspect-aspect-[100/48] mx-auto h-full min-h-40 w-full p-6 transition-all duration-500 select-none ${
                  range.includes(index) ? "blur-none" : "blur-[2px]"
                } `}
              />
            </div>
          ))}
        </Slider>
      </CommentsCarouselALternate>
    </section>
  );
};

interface CommentsCarouselALternateProps {
  children: React.ReactNode;
  isLoading?: boolean;
  contentSize?: number;
}

let CommentsCarouselALternate: React.FC<CommentsCarouselALternateProps> = ({
  children,
  isLoading,
  contentSize = 0,
}) => {
  if (isLoading) {
    return (
      <p className="text-primary/40 col-span-2 w-full py-8 text-center text-3xl font-bold lg:col-span-3">
        Comments are loading...
      </p>
    );
  }

  if (!contentSize) {
    return (
      <p className="text-primary/40 col-span-2 w-full py-8 text-center text-3xl font-bold lg:col-span-3">
        Comments not found.
      </p>
    );
  }

  return children;
};

export default CommentsCarousel;
