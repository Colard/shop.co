import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ProductList from "../../sections/ProductList";
import LinkWay from "../../components/LinkWay";
import Container from "../../components/Container";
import useHeaderHeight from "../../hooks/useHeaderHeight";
import useTailwindBreakpoint from "../../hooks/useTailwindBreakpoint";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useProductsApiSimultion from "../../hooks/useProductsApiSimultion";
import FiltersOverlay from "./FiltersOverlay";
import Pagination from "../../sections/Pagination";
import { FilterParams, Product } from "../../types/api.types";
import {
  createSortingParams,
  TSortCategories,
} from "../../utils/productsHeleprs";

const PAGE_SIZE = 12;
const SELECT_FIELDS: (keyof Product)[] = [
  "id",
  "title",
  "thumbnail",
  "price",
  "discountPercentage",
  "rating",
];

interface CategoryProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {}

let Category: React.FC<CategoryProps> = () => {
  const isFirstRender = useRef(true);

  const { page } = useParams();
  const currentPage = useMemo(() => (page ? parseInt(page, 10) : 1), [page]);

  const headerHeight = useHeaderHeight();
  const isLargeScreen = useTailwindBreakpoint("sm");

  const [areFiltersOpen, setAreFiltersOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const initFilters = useMemo<FilterParams>(
    () => ({
      limit: PAGE_SIZE,
      skip: (currentPage - 1) * PAGE_SIZE,
      select: SELECT_FIELDS,
      ...createSortingParams(searchParams.get("sort") as TSortCategories),
    }),
    [currentPage, searchParams],
  );

  const { response, filters, loading } = useProductsApiSimultion(initFilters);

  const toggleFilters = useCallback(() => {
    setAreFiltersOpen((oldFilters) => !oldFilters);
  }, []);

  const onSortItemSelect = useCallback(
    (value: string) => {
      if (value == "popular" && !searchParams.get("sort")) return;

      const newParams = new URLSearchParams(searchParams);
      newParams.set("sort", value);
      setSearchParams(newParams);
    },
    [searchParams, setSearchParams],
  );

  // reset page number on category change
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (page !== "1") {
      const newPath = location.pathname.replace(/\/\d+$/, "/1");
      navigate({
        pathname: newPath,
        search: location.search,
      });
    }
  }, [searchParams]);

  return (
    <Container className="pt-5 pb-12 md:pt-6 md:pb-20">
      <LinkWay pageName="Shop" className="mb-3 md:mb-6" />
      <div className="flex">
        <FiltersOverlay
          isOpen={areFiltersOpen}
          onClose={toggleFilters}
          isLargeScreen={isLargeScreen}
          headerHeight={headerHeight}
        />

        <div className="flex w-full flex-col">
          <ProductList
            loading={loading}
            category={filters.category}
            products={response?.products || null}
            maxItemsCount={response?.total || 0}
            itemsStartNumber={(currentPage - 1) * PAGE_SIZE + 1}
            currentPage={currentPage}
            className="flex-1"
            itemsOnPage={PAGE_SIZE}
            openFilters={toggleFilters}
            onSortItemSelect={onSortItemSelect}
          />
          <hr className="border-primary/10 mt-6 mb-5 md:mt-9" />
          <nav>
            {typeof response?.total === "number" && response.total > 0 && (
              <Pagination
                className="select-none"
                currentPage={currentPage}
                pageItemsCount={PAGE_SIZE}
                maxItemsCount={response?.total || 0}
              />
            )}
          </nav>
        </div>
      </div>
    </Container>
  );
};

export default Category;
