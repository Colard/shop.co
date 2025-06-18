import { useEffect, useState } from "react";
import Button from "../../components/Button";
import QuantitySelector from "../../components/QuantitySelector";
import { Product } from "../../types/api.types";
import { useCartStore } from "../../stores/cartStore";
import { useModal } from "../../contexts/ModalProviderContext";
import NoItemsQuantityModal from "../../modals/CartModals/NoItemsQuantityModal";
import ItemAddedToCartModal from "../../modals/CartModals/ItemAddedToCartModal";
import ItemsQuantityChangedModal from "../../modals/CartModals/ItemsQuantityChangedModal";
import ItemDeletedModal from "../../modals/CartModals/ItemDeletedModal";
import { checkInStok } from "../../utils/productsHeleprs";

interface InstrumentsFooterProps {
  product: Product | null;
}

let InstrumentsFooter: React.FC<InstrumentsFooterProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem, getItemById, removeItem } = useCartStore();
  const { showModal, hideModal } = useModal();

  const cartItem = product ? getItemById(product.id) : undefined;

  useEffect(() => {
    if (cartItem) setQuantity(cartItem.quantity);
  }, [cartItem]);

  const handleCartUpdate = () => {
    if (!product) return;

    if (quantity > 0) {
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        discount: product.discountPercentage,
        quantity,
      });
    } else {
      removeItem(product.id);
    }

    showModal(
      getCartChangeModal({
        quantity,
        oldQuantity: cartItem?.quantity,
        hideModal,
        title: product.title,
      }),
    );
  };

  const isAvailable =
    !!product?.availabilityStatus && checkInStok(product.availabilityStatus);

  if (!isAvailable) {
    return <p className="text-discount text-2xl font-bold">Out of stock</p>;
  }

  return (
    <div className="mx-auto flex w-full justify-between gap-3 lg:gap-5">
      <QuantitySelector value={quantity} onChangeQuantity={setQuantity} />
      <Button
        className="bg-primary text-bg-color max-w-100 flex-1"
        onClick={handleCartUpdate}
      >
        {cartItem ? "Update Cart" : "Add to Cart"}
      </Button>
    </div>
  );
};

interface ModalProps {
  quantity: number;
  oldQuantity: number | undefined;
  title: string;
  hideModal: () => void;
}

const getCartChangeModal = ({
  quantity,
  oldQuantity,
  title,
  hideModal,
}: ModalProps) => {
  if (!oldQuantity && quantity === 0)
    return <NoItemsQuantityModal hideModal={hideModal} title={title} />;

  if (quantity === 0)
    return <ItemDeletedModal hideModal={hideModal} title={title} />;

  if (quantity !== oldQuantity)
    return (
      <ItemsQuantityChangedModal
        hideModal={hideModal}
        quantity={quantity}
        title={title}
      />
    );

  return (
    <ItemAddedToCartModal
      hideModal={hideModal}
      quantity={quantity}
      title={title}
    />
  );
};
export default InstrumentsFooter;
