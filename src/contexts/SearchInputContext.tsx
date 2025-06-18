import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import useTailwindBreakpoint from "../hooks/useTailwindBreakpoint";
import useProductsSearchApi from "../api/useProductsSearchApi";
import { Product } from "../types/api.types";

interface ContextData {
  data: Product[] | null;
  isLoading: boolean;
  setSearchString: (searchString: string) => void;
  isOpen: boolean;
  isLargeScreen: boolean;
  closeSearch: () => void;
  openSearch: () => void;
}

const Context = createContext<ContextData | null>(null);

interface SearchContextProps {
  children: ReactNode;
}

const SearchContextProvider: React.FC<SearchContextProps> = ({ children }) => {
  const { data, isLoading, setSearchString } = useProductsSearchApi(10, 500);
  const [isOpen, setIsOpen] = useState(false);
  const isLargeScreen = useTailwindBreakpoint("md");
  const closeSearch = useCallback(() => setIsOpen(false), []);
  const openSearch = useCallback(() => setIsOpen(true), []);

  return (
    <Context.Provider
      value={{
        data,
        isLoading,
        setSearchString,
        isOpen,
        isLargeScreen,
        closeSearch,
        openSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useSearchContext = () => {
  const searchContext = useContext(Context);

  if (!searchContext) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider",
    );
  }
  return searchContext;
};

export default SearchContextProvider;
export { useSearchContext };
