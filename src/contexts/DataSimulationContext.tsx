import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Product } from "../types/api.types";

const DataContext = createContext<Product[]>([]);

interface DataSimulationContextProps {
  children: ReactNode;
}

/* simulation of api data*/
export const DataSimulationProvider: React.FC<DataSimulationContextProps> = ({
  children,
}) => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=0")
      .then((res) => res.json())
      .then((data) => setData(data.products))
      .catch((err) => {
        console.error("Fetch error:", err);
        setData([]);
      });
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

const useData = () => {
  const context = useContext(DataContext);
  if (context === null) {
    throw new Error("useData must be used within a DataSimulationContext");
  }
  return context;
};

export default useData;
