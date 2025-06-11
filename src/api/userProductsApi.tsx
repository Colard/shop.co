import React from "react";
import { Product } from "../types/api.types";

export interface useProductsApiProps {
  limit?: number;
  skip?: number;
  page?: number;
  sortBy?: keyof Product;
  order?: "asc" | "desc";
  select?: (keyof Product)[];
}

const useProductsApi = (initialSettings: useProductsApiProps = {}) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const initial = React.useRef(initialSettings);

  const [settings, setSettings] = React.useState<useProductsApiProps>({
    limit: 12,
    skip: 0,
    page: 0,
    ...initial.current,
  });

  const updateSettings = (newSettings: useProductsApiProps) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  React.useEffect(() => {
    if (isLoading) return;

    const { limit = 12, skip = 0, page = 0, sortBy, order, select } = settings;

    let request = `https://dummyjson.com/products?limit=${limit}&skip=${skip + page * limit}`;
    request += sortBy ? `&sortBy=${sortBy}` : "";
    request += order ? `&order=${order}` : "";
    request += select ? `&select=${select.join(",")}` : "";

    setIsLoading(true);

    fetch(request)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false);
      });
  }, [settings]);

  return {
    products: products,
    loading: isLoading,
    updateSettings: updateSettings,
  };
};

export default useProductsApi;
