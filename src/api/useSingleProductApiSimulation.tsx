import { useEffect, useState } from "react";
import useData from "../contexts/DataSimulationContext";
import { Product } from "../types/api.types";

/*

Simulation of API with search params filtering

Original api: https://dummyjson.com/products

The original API doesn't provide enough filtering functionality.         
This API simulates asynchronous behavior with an artificial delay.
(View useProductsApiSimulation for more context about the simulation.)
*/

const cache = new Map<number, Product | null>();

const useSingleProductApiSimulation = (id?: number) => {
  const data = useData();

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(
    id ? cache.get(id) || null : null,
  );
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchProduct = async () => {
      if (!Array.isArray(data)) {
        setIsLoading(false);
        setError(new Error("No data from API"));
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        if (cancelled) return;
        if (id != 0 && !id) {
          throw new Error("Product id is required");
        }

        await new Promise((res) => setTimeout(res, 500));

        const productData = data.find((p) => p.id === id) || null;

        setProduct(productData);
        cache.set(id, productData);
      } catch (e) {
        if (cancelled) return;

        setError(e instanceof Error ? e : new Error("Unknown error"));
      } finally {
        if (cancelled) return;

        setIsLoading(false);
      }
    };

    fetchProduct();

    return () => {
      cancelled = true;
    };
  }, [data, id]);

  return {
    product,
    isLoading,
    error,
  };
};

export default useSingleProductApiSimulation;
