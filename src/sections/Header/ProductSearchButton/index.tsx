import { memo, useCallback, useRef } from "react";
import SearchContextProvider, {
  useSearchContext,
} from "../../../contexts/SearchInputContext";
import useClickOutside from "../../../hooks/useClickOutside";
import { tw } from "../../../utils/tailwindFunctions";
import SearchIcon from "../../../assets/icons/SearchIcon";
import SVGButton from "../../../components/SVGButton";
import SearchCloseButton from "./SearchCloseButton";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

interface SearchProps {
  className: string;
}

const ProductSearchButton: React.FC<SearchProps> = memo(({ className }) => {
  return (
    <SearchContextProvider>
      <Search className={className} />
    </SearchContextProvider>
  );
});

export default ProductSearchButton;

let Search: React.FC<SearchProps> = ({ className }) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const refInput = useRef<HTMLInputElement>(null);

  const { isOpen, openSearch, closeSearch, isLargeScreen } = useSearchContext();

  useClickOutside(refContainer, closeSearch);

  const handleSearchClick = useCallback(() => {
    if (isLargeScreen) {
      refInput.current?.focus();
    } else {
      openSearch();
    }
  }, [isLargeScreen, openSearch]);

  const isOpenOrLarge = isOpen || isLargeScreen;
  const isOpenOnSmall = isOpen && !isLargeScreen;

  const buttonIsOpenClassName = tw`opacity-40 transition-none duration-0 before:hidden hover:scale-100 active:scale-100`;
  const wrapperClassName = tw`z-20 ${isLargeScreen ? "contents" : ""} ${isOpenOnSmall ? "bg-bg-color absolute inset-0 flex items-center justify-between gap-5 px-5" : ""}`;
  const inputWrapperClassName = tw`contents h-12 flex-1 items-center rounded-full px-4 ${isOpenOrLarge ? "bg-secondary flex" : ""} ${isLargeScreen ? "relative mx-10" : ""} `;
  const searchIconClassName = tw`bg-transparent ${className} ${isOpenOrLarge ? buttonIsOpenClassName : ""}`;

  return (
    <div className={wrapperClassName}>
      <div ref={refContainer} className={inputWrapperClassName}>
        <SVGButton
          svg={<SearchIcon />}
          className={searchIconClassName}
          onClick={handleSearchClick}
        ></SVGButton>

        <SearchInput refInput={refInput} />

        <div className="absolute top-full left-0 flex w-full flex-col overflow-clip rounded-lg md:mt-2">
          <SearchResult />
        </div>

        {isOpenOnSmall && (
          <SearchCloseButton className="absolute top-1/2 right-4 -translate-y-1/2" />
        )}
      </div>
    </div>
  );
};
