import React from "react";
import Container from "../components/Container";
import ItemsLine from "../components/ItemsLine";
import Button from "../components/Button";
import useProductsApiSimulation from "../api/useProductsApiSimultion";
import { FilterParams } from "../types/api.types";

const productsApiProps: FilterParams = {
  sortBy: "discountPercentage",
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
    <Container>
      <section>
        <ItemsLine
          isLoading={loading}
          header="Top Selling"
          products={response?.products || []}
        />
        <Button
          className={`${className} bg-bg-color inset-shadow-primary/50 text-primary border-secondary mt-6 block h-13 w-full border-2 md:mx-auto md:mt-9 md:w-55`}
          {...rest}
        >
          View All
        </Button>
      </section>
    </Container>
  );
};

export default TopSelling;
