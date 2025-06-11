import React from "react";
import Container from "../components/Container";
import ItemsLine from "../components/ItemsLine";
import useProductsApi, { useProductsApiProps } from "../api/userProductsApi";
import Button from "../components/Button";

interface TopSellingProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

const productsApiProps: useProductsApiProps = {
  sortBy: "discountPercentage",
  order: "desc",
  limit: 4,
  select: ["id", "title", "thumbnail", "price", "discountPercentage", "rating"],
};

let TopSelling: React.FC<TopSellingProps> = ({ className = "", ...rest }) => {
  const { products } = useProductsApi(productsApiProps);

  return (
    <Container>
      <section>
        <ItemsLine header="Top Selling" products={products} />
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
