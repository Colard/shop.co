import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import useHideScrollbar from "../hooks/useHideScrollbar";

interface ContextData {
  showModal: (window: ReactNode) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ContextData | null>(null);

const useModal = () => {
  let context = useContext(ModalContext);

  if (context === null) {
    throw new Error("useModal must be used within a ModalContext ");
  }

  return context;
};

interface ModalContextProps {
  children: ReactNode;
}
const ModalContextProvider: React.FC<ModalContextProps> = ({ children }) => {
  const [modal, setModal] = useState<ReactNode>(null);

  const showModal = useCallback((window: ReactNode) => {
    setModal((prev) => {
      if (prev === null) return window;
      return prev;
    });
  }, []);

  const hideModal = useCallback(() => setModal(null), []);
  useHideScrollbar(modal !== null);

  const value = useMemo(
    () => ({ showModal, hideModal }),
    [showModal, hideModal],
  );

  return (
    <ModalContext.Provider value={value}>
      {children}

      {modal && (
        <div
          className="bg-primary/20 fixed inset-0 z-1000 flex items-center justify-center py-10 backdrop-blur-sm md:px-10"
          onClick={hideModal}
        >
          <div
            className="relative max-w-screen"
            onClick={(e) => e.stopPropagation()}
          >
            {modal}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export { ModalContextProvider, useModal };
