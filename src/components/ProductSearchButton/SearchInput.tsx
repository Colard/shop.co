import { KeyboardEventHandler } from "react";
import { useSearchContext } from "../../contexts/SearchInputContext";

interface SearchInputProps {
  refInput: React.RefObject<HTMLInputElement | null>;
}

let SearchInput: React.FC<SearchInputProps> = ({ refInput }) => {
  const { closeSearch, openSearch, setSearchString, isLargeScreen, isOpen } =
    useSearchContext();

  const isOpenOrLarge = isOpen || isLargeScreen;

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Escape") closeSearch();
  };

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value;
    setSearchString(val);
    val === "" ? closeSearch() : openSearch();
  };

  return (
    <input
      ref={refInput}
      onChange={onChangeInput}
      onFocus={openSearch}
      onKeyDown={handleKeyDown}
      className={`placeholder:text-primary/40 w-full px-3 outline-none ${isOpenOrLarge ? "block w-full px-3" : "hidden"}`}
      placeholder="Search for products..."
    ></input>
  );
};

export default SearchInput;
