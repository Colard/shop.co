import { useNavigate } from "react-router-dom";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import Button from "../../components/Button";
import { useModal } from "../../contexts/ModalProviderContext";
import { useCartStore } from "../../stores/cartStore";
import ThanksModal from "../../modals/ThanksModal";

interface ToCheckoutButtonProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {}

let ToCheckoutButton: React.FC<ToCheckoutButtonProps> = ({
  className = "",
  ...rest
}) => {
  const { clear } = useCartStore();
  const { showModal, hideModal } = useModal();
  const navigate = useNavigate();

  const onClick = () => {
    showModal(<ThanksModal hideModal={hideModal} />);
    clear();
    navigate("/", { replace: true });
  };

  return (
    <div className={`w-full ${className}`} {...rest}>
      <Button
        className="bg-primary text-bg-color h-15 w-full gap-3"
        onClick={onClick}
      >
        Go to Checkout <ArrowIcon className="scale-x-[-1]" />
      </Button>
    </div>
  );
};

export default ToCheckoutButton;
