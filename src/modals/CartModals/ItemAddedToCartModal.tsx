import { Link } from "react-router-dom";
import SuccessModalBase from "../SuccessModalBase";

interface ItemAddedToCartModalProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  hideModal: () => void;
  quantity: number;
  title: string;
}

let ItemAddedToCartModal: React.FC<ItemAddedToCartModalProps> = ({
  hideModal,
  quantity,
  title,
}) => {
  return (
    <SuccessModalBase header="Item Added to Cart!" hideModal={hideModal}>
      <p className="text-lg">
        Now, you have {quantity} item(s) of{" "}
        <span className="font-bold">"{title}"</span> in cart!
      </p>

      <Link onClick={hideModal} to="/cart" className="mt-5 block underline">
        Check your cart!
      </Link>
    </SuccessModalBase>
  );
};

export default ItemAddedToCartModal;
