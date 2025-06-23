import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem } from "../types/api.types";

interface TCartState {
  items: CartItem[];
}

interface TCartActions {
  addItem: (item: CartItem) => boolean;
  removeItem: (id: number) => void;
  clear: () => void;
  getItemById: (id: number) => CartItem | undefined;
}

type TCartStore = TCartState & TCartActions;

const CartStore: StateCreator<TCartStore> = (set, get) => ({
  items: [],

  addItem: (item) => {
    const existing = get().items.find((i) => i.id === item.id);

    if (item.quantity <= 0) {
      return false;
    }

    if (existing) {
      set({
        items: get().items.map((i) =>
          i.id === item.id ? { ...i, quantity: item.quantity } : i,
        ),
      });
      return true;
    }

    set({ items: [...get().items, item] });
    return true;
  },

  removeItem: (id) => {
    set({ items: get().items.filter((i) => i.id !== id) });
  },

  clear: () => set({ items: [] }),

  getItemById: (id) => get().items.find((i) => i.id === id),
});

const useCartStore = create<TCartStore>()(
  persist(CartStore, {
    name: "cart-storage",
  }),
);

export function useCartItems(): TCartState["items"] {
  return useCartStore((state) => state.items);
}

export function useCartActions(): TCartActions {
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);
  const clear = useCartStore((s) => s.clear);
  const getItemById = useCartStore((s) => s.getItemById);

  return { addItem, removeItem, clear, getItemById };
}
