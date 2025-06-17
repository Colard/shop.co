import React from "react";
import Container from "../components/Container";
import ItemsLine from "../components/ItemsLine";
import useProductsApiSimulation from "../api/useProductsApiSimultion";
import { FilterParams } from "../types/api.types";
import { Link } from "react-router-dom";

const productsApiProps: FilterParams = {
  sortBy: "rating",
  order: "desc",
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

interface TopSellingProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let TopSelling: React.FC<TopSellingProps> = ({ className = "", ...rest }) => {
  const { response, loading } = useProductsApiSimulation(productsApiProps);

  return (
    <Container className={`${className}`} {...rest}>
      <section>
        <ItemsLine
          isLoading={loading}
          header="Top Selling"
          products={response?.products || []}
        />
        <Link
          to={`/page/1?sort=popular`}
          className="bg-bg-color text-primary border-secondary mt-6 flex h-13 w-full items-center justify-center rounded-full border-2 transition-all duration-300 hover:scale-95 active:scale-95 md:mx-auto md:mt-9 md:w-55"
        >
          View All
        </Link>
      </section>
    </Container>
  );
};

export default TopSelling;
