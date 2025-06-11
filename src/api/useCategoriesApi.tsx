import { useEffect, useState } from "react";
import { ProductCategory } from "../types/api.types";

/*

Simulation of API with search params filtering

Original api: https://dummyjson.com/products

The original API doesn't provide enough filtering functionality.         
This API simulates asynchronous behavior with an artificial delay.
(View useProductsApiSimulation for more context about the simulation.)
*/

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
