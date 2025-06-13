import { useEffect, useState } from "react";
import { Product } from "../../types/api.types";
import useCategoryBySlug from "../../api/useCategoryBySlug";
import { TLinkWayPath } from "../../types/componentsProps.types";

const initialLinkPath = [
  {
    name: "Shop",
    path: "/page/1",
  },
];

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

export default useItemLinkPath;
