import { FilterParams, Product, TOrder } from "../types/api.types";

export const filteringFunction = (product: Product, filters: FilterParams) => {
  return (
    (!filters.category || product.category === filters.category) &&
    (!filters.minPrice || product.price >= filters.minPrice) &&
    (!filters.maxPrice || product.price <= filters.maxPrice) &&
    (!filters.minRating || product.rating >= filters.minRating) &&
    (!filters.maxRating || product.rating <= filters.maxRating)
  );
};

export const sortProducts = (
  products: Product[],
  sortBy: keyof Product | null = null,
  order: TOrder = "asc",
): Product[] => {
  if (!Array.isArray(products) || products.length === 0 || sortBy === null)
    return [...products];

  if (sortBy === "price") {
    const calcRealPrice = (p: Product) =>
      p.price * (1 - p.discountPercentage / 100);

    return [...products].sort((a, b) =>
      order === "asc"
        ? calcRealPrice(a) - calcRealPrice(b)
        : calcRealPrice(b) - calcRealPrice(a),
    );
  }

  const compare = (a: Product, b: Product): number => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return order === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === "number" && typeof bValue === "number") {
      return order === "asc" ? aValue - bValue : bValue - aValue;
    }

    return 0;
  };

  return [...products].sort(compare);
};

export const sliceProducts = (
  products: Product[],
  limit: number = 0,
  skip: number = 0,
) => {
  if (limit === 0) return products;
  return products.slice(skip, skip + limit);
};

export function pickProperties<T extends object, K extends keyof T>(
  obj: T,
  keys: K[] | undefined,
): Pick<T, K> {
  const result = {} as Pick<T, K>;

  if (!keys || keys.length === 0) return result;

  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });

  return result;
}

/*    SORTING    */

export type TSortCategories =
  | "newest"
  | "oldest"
  | "price-asc"
  | "price-desc"
  | "popular"
  | "discount";

export type TSsortingDictionary = {
  [key in TSortCategories]: [keyof Product, TOrder];
};

export const sortCategories: TSsortingDictionary = {
  newest: ["id", "asc"],
  oldest: ["id", "desc"],
  "price-asc": ["price", "asc"],
  "price-desc": ["price", "desc"],
  popular: ["rating", "desc"],
  discount: ["discountPercentage", "desc"],
};

export function createSortingParams(key: TSortCategories): FilterParams {
  if (!sortCategories[key]) return createSortingParams("popular");

  return {
    sortBy: sortCategories[key][0],
    order: sortCategories[key][1],
  };
}
