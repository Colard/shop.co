import React from "react";
import Container from "../components/Container";
import ItemsLine from "../components/ItemsLine";
import Button from "../components/Button";
import useProductsApiSimulation from "../api/useProductsApiSimultion";
import { FilterParams } from "../types/api.types";

const productsApiProps: FilterParams = {
  sortBy: "id",
  order: "desc",
  limit: 4,
  select: ["id", "title", "thumbnail", "price", "discountPercentage", "rating"],
};

interface NewArrivalsProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let NewArrivals: React.FC<NewArrivalsProps> = ({ className = "", ...rest }) => {
  const { response } = useProductsApiSimulation(productsApiProps);

  return (
    <Container className={`${className}`} {...rest}>
      <section>
        <ItemsLine header="New Arrivals" products={response?.products || []} />
        <Button className="bg-bg-color inset-shadow-primary/50 text-primary border-secondary mt-6 block h-13 w-full border-2 md:mx-auto md:mt-9 md:w-55">
          View All
        </Button>
      </section>
    </Container>
  );
};

export default NewArrivals;
