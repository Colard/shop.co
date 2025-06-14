import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { FilterParams, Product } from "../types/api.types";
import { createSortingParams, TSortCategories } from "../utils/productsHeleprs";
import { useSearchParams } from "react-router-dom";
import useProductsApiSimultion from "../api/useProductsApiSimultion";

type FilteredDataResponse = ReturnType<typeof useProductsApiSimultion> & {
  filters: FilterParams;
};

const DataContext = createContext<FilteredDataResponse | null>(null);
const SELECT_FIELDS: (keyof Product)[] = [
  "id",
  "title",
  "thumbnail",
  "price",
  "discountPercentage",
  "rating",
  "availabilityStatus",
];

interface FiltersProviderContextProps {
  children: ReactNode;
  page_size: number;
  currentPage: number;
}

export const FiltersProvider: React.FC<FiltersProviderContextProps> = ({
  children,
  page_size,
  currentPage,
}) => {
  const [searchParams] = useSearchParams();

  const filters = useMemo<FilterParams>(
    () => ({
      limit: page_size,
      skip: (currentPage - 1) * page_size,
      select: SELECT_FIELDS,
      ...createSortingParams(searchParams.get("sort") as TSortCategories),
      category: searchParams.get("category") || undefined,
      minPrice: Number(searchParams.get("minPrice")) || undefined,
      maxPrice: Number(searchParams.get("maxPrice")) || undefined,
      minRating: Number(searchParams.get("minRating")) || undefined,
      maxRating: Number(searchParams.get("maxRating")) || undefined,
    }),
    [page_size, currentPage, searchParams],
  );

  useEffect(() => {
    response.changeFilters(filters);
  }, [filters]);

  const response = useProductsApiSimultion(filters);

  return (
    <DataContext.Provider value={{ ...response, filters }}>
      {children}
    </DataContext.Provider>
  );
};

const useFilteredData = () => {
  const context = useContext(DataContext);

  if (context === null) {
    throw new Error(
      "useFilteredData must be used within a DataSimulationContext",
    );
  }
  return context;
};

export default useFilteredData;
