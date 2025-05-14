import { useCallback, useEffect, useState } from "react";
import { FilterParams, Product } from "../types/api.types";
import useData from "../contexts/DataSimulationContext";
import {
  filteringFunction,
  pickProperties,
  sliceProducts,
  sortProducts,
} from "../utils/productsHeleprs";

type ProductResponse = {
  products: Product[] | null;
  total: number;
  skip: number;
  limit: number;
};

const useProductsApiSimultion = (initFilters: FilterParams) => {
  const data = useData();
  const [filters, setFilters] = useState<FilterParams>({
    limit: 12,
    skip: 0,
    ...initFilters,
  });

  const [response, setResponse] = useState<ProductResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const changeFilters = useCallback((newFilters: FilterParams) => {
    setFilters(newFilters);
  }, []);

  useEffect(() => {
    setFilters({
      limit: 12,
      skip: 0,
      ...initFilters,
    });
  }, [initFilters]);

  useEffect(() => {
    let cancelled = false;
    const fetch = async () => {
      if (!Array.isArray(data)) return;

      setLoading(true);
      setError(null);

      try {
        await new Promise((res) => setTimeout(res, 500));

        if (cancelled) return;

        const filtered = data.filter((p) => filteringFunction(p, filters));
        const sorted = sortProducts(filtered, filters.sortBy, filters.order);
        const sliced = sliceProducts(sorted, filters.limit, filters.skip);
        const cleaned = filters.select
          ? sliced.map((p) => pickProperties(p, filters.select))
          : sliced;

        setResponse({
          products: cleaned,
          total: filtered.length,
          limit: filters.limit || 0,
          skip: filters.skip || 0,
        });
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e : new Error("Unknown error"));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetch();
    return () => {
      cancelled = true;
    };
  }, [data, filters]);

  return {
    response,
    filters,
    loading,
    error,
    changeFilters,
  };
};

export default useProductsApiSimultion;
