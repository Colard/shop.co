import { useEffect, useMemo, useRef } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { FiltersProvider } from "../../contexts/FilteredDataContext";
import Category from "./Category";
import { PRODUCT_PAGE_SIZE } from "../../constants";

let CategoryOverlay: React.FC = () => {
  const isFirstRender = useRef(true);

  const { page } = useParams();
  const currentPage = useMemo(() => (page ? parseInt(page, 10) : 1), [page]);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // reset page number on change search params
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
    <FiltersProvider page_size={PRODUCT_PAGE_SIZE} currentPage={currentPage}>
      <Category currentPage={currentPage} />
    </FiltersProvider>
  );
};

export default CategoryOverlay;
