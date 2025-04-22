import React from "react";
import Container from "../components/Container";
import ItemsLine from "../components/ItemsLine";
import useProductsApi, { useProductsApiProps } from "../hooks/userProductsApi";
import Button from "../components/Button";

const productsApiProps: useProductsApiProps = {
  sortBy: "discountPercentage",
  order: "desc",
  limit: 4,
  select: ["id", "title", "thumbnail", "price", "discountPercentage", "rating"],
};

let TopSelling: React.FC = () => {
  const { products, loadMore } = useProductsApi(productsApiProps);

  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if (!isMounted.current) {
      loadMore();
      isMounted.current = true;
    }
  }, []);

  return (
    <Container>
      <ItemsLine header="Top Selling" products={products} />
      <Button className="bg-bg-color text-primary border-secondary mt-6 block h-13 w-full border-2 md:mx-auto md:mt-9 md:w-55">
        View All
      </Button>
    </Container>
  );
};

export default TopSelling;
