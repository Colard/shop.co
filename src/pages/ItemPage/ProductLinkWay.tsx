import { useEffect, useState } from "react";
import { Product } from "../../types/api.types";
import useCategoryBySlug from "../../api/useCategoryBySlug";
import { TLinkWayPath } from "../../types/componentsProps.types";
import LinkWay from "../../components/LinkWay";

const initialLinkPath = [
  {
    name: "Shop",
    path: "/page/1",
  },
];

const ProductLinkWay: React.FC<{ product: Product | null }> = ({ product }) => {
  const linkPath = useItemLinkPath(product);
  return (
    <LinkWay pagePath={linkPath} className="my-5 md:mt-6 md:mb-9"></LinkWay>
  );
};

export default ProductLinkWay;

const useItemLinkPath = (product: Product | null) => {
  const [itemLPaths, setItemLPaths] = useState<TLinkWayPath[]>(initialLinkPath);

  const category = useCategoryBySlug(product?.category || "");

  useEffect(() => {
    if (product) {
      const newPath: TLinkWayPath[] = [...initialLinkPath];

      if (category) {
        newPath.push({
          name: category.name,
          path: `/page/1?category=${category.slug}`,
        });
      }

      newPath.push(product.title);

      setItemLPaths(newPath);
    }
  }, [product, category]);

  return itemLPaths;
};
