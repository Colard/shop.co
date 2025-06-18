import { useEffect, useRef, useState } from "react";
import { Product } from "../types/api.types";

const useProductsSearchApi = (limit: number = 0, delay: number = 500) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState<Product[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const timerIdRef = useRef<number>(null);

  useEffect(() => {
    if (!searchString) return;

    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${searchString}&limit=${limit}`,
        );

        const data = await response.json();
        setData(data.products);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
          return;
        }

        setError(new Error("Unknown error"));
      } finally {
        setIsLoading(false);
      }
    };

    timerIdRef.current = setTimeout(fetchData, delay);

    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    };
  }, [limit, searchString]);

  return {
    isLoading,
    data,
    error,
    setSearchString,
  };
};

export default useProductsSearchApi;
