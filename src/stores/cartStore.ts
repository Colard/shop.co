import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number;
  title: string;
  price: number;
  discount: number;
  thumbnail: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => boolean;
  removeItem: (id: number) => void;
  clear: () => void;
  getItemById: (id: number) => CartItem | undefined;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
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
    }),

    {
      name: "cart-storage",
    },
  ),
);
