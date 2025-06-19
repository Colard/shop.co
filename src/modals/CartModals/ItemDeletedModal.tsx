import { Link } from "react-router-dom";
import WarningModelBase from "../WarningModalBase";

interface ItemDeletedModalProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  hideModal: () => void;

  title: string;
}

let ItemDeletedModal: React.FC<ItemDeletedModalProps> = ({
  hideModal,
  title,
}) => {
  return (
    <WarningModelBase header="Item Removed!" hideModal={hideModal}>
      <p className="text-lg">
        You <span className="text-red">removed</span>{" "}
        <span className="font-bold">"{title}"</span> from cart!
      </p>

      <Link onClick={hideModal} to="/cart" className="mt-5 block underline">
        Check your cart!
      </Link>
    </WarningModelBase>
  );
};

export default ItemDeletedModal;
