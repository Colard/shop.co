interface CartProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let Cart: React.FC<CartProps> = ({ ...rest }) => {
  return <section {...rest}></section>;
};

export default Cart;
