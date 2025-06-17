import React, { useEffect } from "react";
import ItemsLine from "../components/ItemsLine";
import useProductsApiSimulation from "../api/useProductsApiSimultion";
import { FilterParams } from "../types/api.types";
import { Link } from "react-router-dom";

const productsApiProps: FilterParams = {
  sortBy: "id",
  order: "rnd",
  limit: 4,
  select: [
    "id",
    "title",
    "thumbnail",
    "price",
    "discountPercentage",
    "rating",
    "availabilityStatus",
  ],
};

interface AlsoLikeProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {
  category?: string;
  productId?: number;
}

let AlsoLike: React.FC<AlsoLikeProps> = ({
  className = "",
  category,
  productId,
  ...rest
}) => {
  const { response, loading, changeFilters } = useProductsApiSimulation({
    ...productsApiProps,
    category,
  });

  useEffect(() => {
    if (!category) return;

    changeFilters({ category });
  }, [category, productId]);

  return (
    <section className={`${className}`} {...rest}>
      <ItemsLine
        isLoading={!category || loading}
        header="You might also like"
        products={category ? response?.products || [] : []}
      />
      <Link
        to={`/page/1${category ? "?category=" + category : ""}`}
        className="bg-bg-color text-primary border-secondary mt-6 flex h-13 w-full items-center justify-center rounded-full border-2 transition-all duration-300 hover:scale-95 active:scale-95 md:mx-auto md:mt-9 md:w-55"
      >
        View All
      </Link>
    </section>
  );
};

export default AlsoLike;
