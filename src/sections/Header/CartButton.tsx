import { Link } from "react-router-dom";
import CartIcon from "../../assets/icons/CartIcon";
import SVGButton from "../../components/SVGButton";
import { useCartStore } from "../../stores/cartStore";

interface CartButtonProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {}

let CartButton: React.FC<CartButtonProps> = ({ className = "", ...rest }) => {
  const { items } = useCartStore();

  return (
    <Link to="/cart">
      <div className={`relative ${className}`} {...rest}>
        {items.length > 0 && (
          <p className="bg-red absolute -top-2 -right-2 z-1 flex aspect-square min-w-4 items-center justify-center rounded-full p-[1px] text-sm leading-none font-bold">
            {items?.length || 0}
          </p>
        )}
        <SVGButton svg={<CartIcon />}></SVGButton>
      </div>
    </Link>
  );
};

export default CartButton;
