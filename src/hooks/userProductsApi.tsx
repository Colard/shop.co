import React from "react";
import { Product } from "../types/api.types";

export interface useProductsApiProps {
  limit?: number;
  skip?: number;
  sortBy?: keyof Product;
  order?: "asc" | "desc";
  select?: (keyof Product)[];
}

interface State {
  products: Product[];
  page: number;
  loading: boolean;
}

type Action =
  | { type: "LOAD_START" }
  | { type: "LOAD_SUCCESS"; payload: Product[] }
  | { type: "RESET" };

const initialState: State = {
  products: [],
  page: 0,
  loading: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOAD_START":
      return { ...state, loading: true };
    case "LOAD_SUCCESS":
      return {
        ...state,
        loading: false,
        page: state.page + 1,
        products: [...state.products, ...action.payload],
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const useProductsApi = ({
  limit = 12,
  skip = 0,
  sortBy,
  order,
  select,
}: useProductsApiProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const loadMore = React.useCallback(() => {
    if (state.loading) return;

    let request = `https://dummyjson.com/products?limit=${limit}&skip=${skip + state.page * limit}`;
    request += sortBy ? `&sortBy=${sortBy}` : "";
    request += order ? `&order=${order}` : "";
    request += select ? `&select=${select.join(",")}` : "";

    dispatch({ type: "LOAD_START" });

    fetch(request)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "LOAD_SUCCESS", payload: data.products });
      });
  }, [limit, skip, sortBy, order, select, state.page, state.loading]);

  return {
    products: state.products,
    loadMore,
    loading: state.loading,
  };
};

export default useProductsApi;
