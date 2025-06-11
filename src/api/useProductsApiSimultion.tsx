import { useCallback, useEffect, useState } from "react";
import { FilterParams, ProductResponse } from "../types/api.types";
import useData from "../contexts/DataSimulationContext";
import {
  filteringFunction,
  filterProductsByCategory,
  pickProperties,
  sliceProducts,
  sortProducts,
} from "../utils/productsHeleprs";

/* simulation of api with search params filtering*/
const useProductsApiSimulation = (initFilters: FilterParams) => {
  const data = useData();

  const [filters, setFilters] = useState<FilterParams>(() => ({
    limit: 12,
    skip: 0,
    ...initFilters,
  }));

  const [response, setResponse] = useState<ProductResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const changeFilters = useCallback((newFilters: FilterParams) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
  }, []);

  useEffect(() => {
    let cancelled = false;

    const fetch = async () => {
      if (!Array.isArray(data)) return;

      setLoading(true);
      setError(null);

      try {
        await new Promise((res) => setTimeout(res, 500));
        if (cancelled) return;

        const filteredByCategory = filterProductsByCategory(
          data,
          filters.category,
        );

        const filteredFull = filteredByCategory.filter((p) =>
          filteringFunction(p, filters),
        );

        const sorted = sortProducts(
          filteredFull,
          filters.sortBy,
          filters.order,
        );

        const sliced = sliceProducts(sorted, filters.limit, filters.skip);
        const cleaned = filters.select
          ? sliced.map((p) => pickProperties(p, filters.select))
          : sliced;

        const discountedPrices = filteredByCategory.map((p) =>
          p.discountPercentage >= 10
            ? p.price * (1 - p.discountPercentage / 100)
            : p.price,
        );

        const minPrice = Math.min(...discountedPrices);
        const maxPrice = Math.max(...discountedPrices);

        setResponse({
          products: cleaned,
          total: filteredFull.length,
          limit: filters.limit || 0,
          skip: filters.skip || 0,
          maxPrice: isFinite(maxPrice) ? maxPrice : 0,
          minPrice: isFinite(minPrice) ? minPrice : 0,
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

export default useProductsApiSimulation;
