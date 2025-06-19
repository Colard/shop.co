import useTailwindBreakpoint from "../../hooks/useTailwindBreakpoint";
import { useCartStore } from "../../stores/cartStore";
import CartItemCard from "./CartItemCard";

interface CartItemsListProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let CartItemsList: React.FC<CartItemsListProps> = ({
  className = "",
  ...rest
}) => {
  const { items } = useCartStore();
  const isLarge = useTailwindBreakpoint("--breakpoint-xs");

  if (items.length === 0) {
    return (
      <p className="text-primary/40 w-full py-8 text-center text-3xl font-bold">
        Your Cart is empty.
      </p>
    );
  }

  return (
    <section
      className={`felx md-5 border-primary/10 rounded-[1.25rem] border-1 p-3 ${className}`}
      {...rest}
    >
      <h2 className="sr-only">Items List</h2>
      {items.map((item) => (
        <CartItemCard
          isLarge={isLarge}
          key={item.id}
          item={item}
          className="border-primary/10 mb-4 border-b-1 pb-4 last:mb-0 last:border-b-0 last:pb-0 md:mb-6 md:pb-6 last:md:mb-0 last:md:pb-0"
        />
      ))}
    </section>
  );
};

export default CartItemsList;
