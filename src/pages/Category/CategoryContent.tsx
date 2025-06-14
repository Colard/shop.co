import ProductList from "./ProductList";
import LinkWay from "../../components/LinkWay";
import Container from "../../components/Container";

import { useCallback, useState } from "react";
import FiltersOverlay from "./FiltersOverlay";
import Pagination from "../../components/Pagination";
import useFilteredData from "../../contexts/FilteredDataContext";
import { PRODUCT_PAGE_SIZE } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";

interface CategoryProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  currentPage: number;
}

let Category: React.FC<CategoryProps> = ({ currentPage }) => {
  const [areFiltersOpen, setAreFiltersOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleFilters = useCallback(() => {
    setAreFiltersOpen((oldFilters) => !oldFilters);
  }, []);
  const { response } = useFilteredData();

  const handlePageChange = useCallback(
    (selectedItem: { selected: number }) => {
      if (selectedItem.selected !== currentPage - 1) {
        navigate(`/page/${selectedItem.selected + 1}${location.search}`);
      }
    },
    [currentPage, navigate, location.search],
  );

  return (
    <Container className="pt-5 pb-12 md:pt-6 md:pb-20">
      <LinkWay pagePath={["Shop"]} className="mb-3 md:mb-6" />
      <div className="flex">
        <FiltersOverlay isOpen={areFiltersOpen} onClose={toggleFilters} />

        <div className="ml-0 flex w-full flex-col sm:ml-5">
          <ProductList
            itemsStartNumber={(currentPage - 1) * PRODUCT_PAGE_SIZE + 1}
            currentPage={currentPage}
            className="flex-1"
            itemsOnPage={PRODUCT_PAGE_SIZE}
            openFilters={toggleFilters}
          />
          <hr className="border-primary/10 mt-6 mb-5 md:mt-9" />

          {typeof response?.total === "number" && response.total > 0 && (
            <Pagination
              handlePageChange={handlePageChange}
              className="select-none"
              currentPage={currentPage}
              pageItemsCount={PRODUCT_PAGE_SIZE}
              maxItemsCount={response?.total || 0}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Category;
