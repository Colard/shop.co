import { useEffect, useState } from "react";
import useCategoriesApi from "./useCategoriesApi";
import { ProductCategory } from "../types/api.types";

const baseCategory = {
  name: "All Products",
  slug: "",
};

const useCategoryBySlug = (slug: string, defaultCategory?: ProductCategory) => {
  const categories = useCategoriesApi();

  const [category, setCategory] = useState<ProductCategory>(
    defaultCategory || baseCategory,
  );
  useEffect(() => {
    if (!slug) {
      setCategory(defaultCategory || baseCategory);
      return;
    }

    if (category.slug === slug) return;

    const currentCategory = categories?.find((c) => c.slug === slug);

    currentCategory
      ? setCategory(currentCategory)
      : setCategory(defaultCategory || baseCategory);
  }, [slug, categories, defaultCategory]);

  return category;
};

export default useCategoryBySlug;
