import CloseIcon from "../../assets/icons/CloseIcon";
import { useSearchContext } from "../../contexts/SearchInputContext";
import SVGButton from "../SVGButton";

interface SearchCloseButtonProps {
  className: string;
}

const SearchCloseButton: React.FC<SearchCloseButtonProps> = ({ className }) => {
  const { closeSearch } = useSearchContext();

  return (
    <SVGButton
      svg={<CloseIcon />}
      className={`max-h-5 max-w-5 ${className}`}
      onClick={closeSearch}
    ></SVGButton>
  );
};

export default SearchCloseButton;
