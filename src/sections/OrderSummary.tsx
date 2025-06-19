import { useCartStore } from "../stores/cartStore";

interface OrderSummaryProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let OrderSummary: React.FC<OrderSummaryProps> = ({
  className = "",
  ...rest
}) => {
  const { items } = useCartStore();
  return <section className={`my-class ${className}`} {...rest}></section>;
};

export default OrderSummary;
