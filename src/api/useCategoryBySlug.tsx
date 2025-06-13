import { useEffect, useState } from "react";
import useCategoriesApi from "./useCategoriesApi";
import { ProductCategory } from "../types/api.types";
/*

Simulation of API with search params filtering

Original api: https://dummyjson.com/products

The original API doesn't provide enough filtering functionality.         
This API simulates asynchronous behavior with an artificial delay.
(View useProductsApiSimulation for more context about the simulation.)
*/

const useCategoryBySlug = (
  slug?: string,
  defaultCategory?: ProductCategory,
) => {
  const categories = useCategoriesApi();

  const [category, setCategory] = useState<ProductCategory | undefined>(
    defaultCategory,
  );
  useEffect(() => {
    if (!slug) {
      setCategory(undefined);
      return;
    }

    if (category?.slug === slug) return;

    const currentCategory = categories?.find((c) => c.slug === slug);

    currentCategory
      ? setCategory(currentCategory)
      : setCategory(defaultCategory);
  }, [slug, categories, defaultCategory]);

  return category;
};

export default useCategoryBySlug;
