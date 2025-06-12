import { useNavigate, useParams } from "react-router-dom";
import Container from "../components/Container";
import LinkWay from "../components/LinkWay";
import { useEffect, useState } from "react";
import useSingleProductApiSimulation from "../api/useSingleProductApiSimulation";
import { TLinkWayPath } from "../types/componentsProps.types";
import useCategoriesApi from "../api/useCategoriesApi";
import TabMenu from "../components/TabMenu";

const initialLinkPath = [
  {
    name: "Shop",
    path: "/page/1",
  },
];

let ItemPage: React.FC = () => {
  const params = useParams();
  const itemId = params.id;
  const navigate = useNavigate();

  const categories = useCategoriesApi();

  const { product, isLoading } = useSingleProductApiSimulation(+(itemId || -1));

  const [itemLinksPaths, setItemLinksPaths] =
    useState<TLinkWayPath[]>(initialLinkPath);

  useEffect(() => {
    if (!product && !isLoading) {
      navigate("/404");
    }

    if (product) {
      const newPath: TLinkWayPath[] = [...initialLinkPath];

      if (categories) {
        const category = categories.find((c) => c.slug === product.category);

        if (category) {
          newPath.push({
            name: category.name,
            path: `/page/1?category=${category.slug}`,
          });
        }
      }

      newPath.push(product.title);

      setItemLinksPaths(newPath);
    }
  }, [product, isLoading, categories]);

  return (
    <Container>
      <LinkWay pagePath={itemLinksPaths}></LinkWay>
      <TabMenu></TabMenu>
    </Container>
  );
};

export default ItemPage;
