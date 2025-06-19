import CartItemsList from "../../sections/CartItemsList";
import OrderSummary from "../../sections/OrderSummary";
import { useCartStore } from "../../stores/cartStore";

interface CartContentProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {}

let CartContent: React.FC<CartContentProps> = ({ className = "" }) => {
  const { items } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-primary/40 w-full py-8 text-center text-3xl font-bold">
          Your Cart is empty.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`mt-5 flex flex-row flex-wrap gap-x-4 gap-y-5 md:mt-6 ${className}`}
    >
      <CartItemsList className="h-max flex-800 basis-125" />
      <OrderSummary className="h-max flex-100 basis-125" />
    </div>
  );
};

export default CartContent;
