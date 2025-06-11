import { useEffect, useState } from "react";
import { ProductCategory } from "../types/api.types";

function useCategoriesApi() {
  const [categories, setCategories] = useState<ProductCategory[] | null>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return categories;
}

export default useCategoriesApi;
