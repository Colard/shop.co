import React from "react";
import LoadingCard from "../components/LoadingCard";
import FiltersIcon from "../assets/icons/FiltersIcon";
import { Product } from "../types/api.types";
import ItemCard from "../components/ItemCard";
import TextSelect from "../components/TextSelect/TextSelect";
import { TSortCategories } from "../utils/productsHeleprs";
import { useSearchParams } from "react-router-dom";

type TSortingElements = [TSortCategories, string][];
const SORT_CATEGORIES: TSortingElements = [
  ["popular", "Popular"],
  ["newest", "Newest"],
  ["oldest", "Oldest"],
  ["price-asc", "Price: Low to High"],
  ["price-desc", "Price: High to Low"],
  ["discount", "Discount"],
];

interface ProductListProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  category?: string;
  currentPage: number;
  maxItemsCount: number;
  itemsOnPage: number;
  itemsStartNumber: number;
  products: Product[] | null;
  openFilters: () => void;
  loading: boolean;
  onSortItemSelect: (value: string) => void;
}

let ProductList: React.FC<ProductListProps> = ({
  className = "",
  products,
  category = "All Products",
  currentPage,
  maxItemsCount,
  itemsStartNumber,
  itemsOnPage,
  openFilters,
  onSortItemSelect,
  loading,
  ...rest
}) => {
  const [searchParams] = useSearchParams();
  const value = searchParams.get("sort") as TSortCategories;
  const initialParam =
    SORT_CATEGORIES.find(([v]) => v === value) || SORT_CATEGORIES[0];

  return (
    <section className={`${className}`} {...rest}>
      <article className="relative mb-4 flex flex-wrap items-baseline gap-y-2 lg:mb-9 lg:justify-between">
        <h2 className="text-logo font-bold">{category}</h2>

        <div className="contents lg:flex">
          {products && products.length > 0 && (
            <p className="text-primary/60 ml-2 lg:mr-3 lg:ml-0">
              Showing {itemsStartNumber}-
              {itemsStartNumber + products.length - 1} of {maxItemsCount}{" "}
              Products
            </p>
          )}
          <div className="inline w-full lg:w-auto">
            Sort by:{" "}
            <TextSelect
              className=""
              initialValue={initialParam}
              onItemSelect={onSortItemSelect}
              elements={SORT_CATEGORIES}
            />
          </div>
        </div>
        <div
          onClick={openFilters}
          className="bg-secondary hover:bg-primary transition-color group hover:before:bg-primary absolute top-1/2 right-2 size-8 -translate-y-1/2 cursor-pointer rounded-full p-2 duration-300 sm:hidden"
        >
          <FiltersIcon className="group-hover:text-secondary transition-color size-4 duration-300" />
        </div>
      </article>

      <article className="grid grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-9">
        <Products
          products={products}
          itemsOnPage={itemsOnPage}
          loading={loading}
        />
      </article>
    </section>
  );
};

interface ProductsProps {
  products: Product[] | null;
  itemsOnPage: number;
  loading: boolean;
}

let Products: React.FC<ProductsProps> = ({
  products,
  itemsOnPage,
  loading,
}) => {
  if (!products || loading) {
    return (
      <>
        {Array.from({ length: itemsOnPage }).map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </>
    );
  }

  if (products.length === 0) {
    return (
      <p className="text-primary/40 col-span-2 w-full py-32 text-center text-3xl font-bold lg:col-span-3">
        No products found.
      </p>
    );
  }

  return (
    <>
      {products.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </>
  );
};

export default React.memo(ProductList);
