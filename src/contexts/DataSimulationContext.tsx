import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Product } from "../types/api.types";
import { filterProductsDiscount } from "../utils/productsHeleprs";

const DataContext = createContext<Product[] | null>([]);

interface DataSimulationContextProps {
  children: ReactNode;
}

/*

Simulation of API with search params filtering

Original api: https://dummyjson.com/products

The original API doesn't provide enough filtering functionality.         
This API simulates asynchronous behavior with an artificial delay.
(View useProductsApiSimulation for more context about the simulation.)
*/

export const DataSimulationProvider: React.FC<DataSimulationContextProps> = ({
  children,
}) => {
  const [data, setData] = useState<Product[] | null>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=0")
      .then((res) => res.json())
      .then((data) => setData(filterProductsDiscount(data.products)))
      .catch((err) => {
        console.error("Fetch error:", err);
        setData(null);
      });
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

const useData = () => {
  const context = useContext(DataContext);
  return context;
};

export default useData;
