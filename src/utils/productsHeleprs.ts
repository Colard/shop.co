import { FilterParams, Product, TOrder } from "../types/api.types";

/*     SERVER SIMULAION FUNCTIONS        */

export const filterProductsByParams = (
  product: Product,
  filters: FilterParams,
) => {
  const hasDiscount = product.discountPercentage > 10;
  const realPrice = hasDiscount
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  return (
    (!filters.minPrice || realPrice >= filters.minPrice) &&
    (!filters.maxPrice || realPrice <= filters.maxPrice) &&
    (!filters.minRating || product.rating >= filters.minRating) &&
    (!filters.maxRating || product.rating <= filters.maxRating)
  );
};

export const filterProductsByCategory = (
  products: Product[],
  category?: string,
) => {
  return products.filter(
    (product) => !category || product.category === category,
  );
};

export const checkInStok = (availabilityStatus: string) => {
  return /^In/gi.test(availabilityStatus);
};

/*             SORTING FUNCTIONS          */
type TSortingFunction<T> = (a: T, b: T) => number;

function sortByAvailabilityDecorator<T extends Product>(
  f: TSortingFunction<T>,
) {
  return (a: T, b: T) => {
    const isAinStock = checkInStok(a.availabilityStatus);
    const isBinStock = checkInStok(b.availabilityStatus);
    if (isAinStock !== isBinStock) {
      return +isBinStock - +isAinStock;
    }
    return f(a, b);
  };
}

export const sortProductsByPrice = (products: Product[], order: TOrder) => {
  /*remove discount <= 10 %*/
  const calcRealPrice = (p: Product) =>
    p.discountPercentage > 0
      ? p.price * (1 - p.discountPercentage / 100)
      : p.price;

  const compare = (a: Product, b: Product) => {
    return order === "asc"
      ? calcRealPrice(a) - calcRealPrice(b)
      : calcRealPrice(b) - calcRealPrice(a);
  };

  return [...products].sort(sortByAvailabilityDecorator(compare));
};

export const sortProductsByRawParameter = (
  products: Product[],
  sortBy: keyof Product,
  order: TOrder,
) => {
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

  return [...products].sort(sortByAvailabilityDecorator(compare));
};

export const shuffleArray = (array: Product[]) => {
  const compare = () => Math.random() - 0.5;
  return [...array].sort(sortByAvailabilityDecorator(compare));
};

export const sortProducts = (
  products: Product[],
  sortBy: keyof Product | null = null,
  order: TOrder = "asc",
): Product[] => {
  if (!Array.isArray(products) || products.length === 0 || sortBy === null)
    return [...products];

  if (order === "rnd") {
    return shuffleArray(products);
  }

  if (sortBy === "price") {
    return sortProductsByPrice(products, order);
  }

  return sortProductsByRawParameter(products, sortBy, order);
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

/*   DISCOUNT FILTERING    */
// !!! ADDED FOR TESTING WITH API !!!
export function filterProductsDiscount(products: Product[]): Product[] {
  return products.map((el) => {
    return {
      ...el,
      discountPercentage:
        el.discountPercentage < 10 ? 0 : Math.round(el.discountPercentage),
    };
  });
}

/*    SORTING  PARAMS  */

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
