import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

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

  useEffect(() => {
    if (modal === null) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {modal && (
        <div
          className="bg-primary/20 fixed inset-0 z-1000 flex items-center justify-center p-10 backdrop-blur-sm"
          onClick={hideModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {modal}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export { ModalContextProvider, useModal };
