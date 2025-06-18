import { Link } from "react-router-dom";
import SuccessModalBase from "../SuccessModalBase";

interface ItemsQuantityChangedModalProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  hideModal: () => void;
  quantity: number;
  title: string;
}

let ItemsQuantityChangedModal: React.FC<ItemsQuantityChangedModalProps> = ({
  hideModal,
  quantity,
  title,
}) => {
  return (
    <SuccessModalBase header="Cart Updated!" hideModal={hideModal}>
      <p className="text-lg">
        You changed <span className="font-bold">"{title}"</span> quantity to{" "}
        {quantity} item(s) to cart!
      </p>

      <Link onClick={hideModal} to="/cart" className="mt-5 block underline">
        Check your cart!
      </Link>
    </SuccessModalBase>
  );
};

export default ItemsQuantityChangedModal;
