import { memo, useCallback, useState } from "react";
import BinIcon from "../../assets/icons/BinIcon";
import Button from "../../components/Button";
import QuantitySelector from "../../components/QuantitySelector";
import { useCartStore } from "../../stores/cartStore";
import { CartItem } from "../../types/api.types";

interface CartItemCardProps
  extends Omit<React.ComponentPropsWithoutRef<"article">, "children"> {
  item: CartItem;
  isLarge?: boolean;
}

let CartItemCard: React.FC<CartItemCardProps> = ({
  className = "",
  item,
  isLarge,
  ...rest
}) => {
  const [currQuantity, setCurrQuantity] = useState(item.quantity);
  const { removeItem, addItem } = useCartStore();

  const onChangeQuantity = useCallback(
    (value: number) => {
      setCurrQuantity(value);

      if (value > 0) {
        addItem({ ...item, quantity: value });
        return;
      }

      removeItem(item.id);
    },
    [addItem, removeItem, item],
  );

  return (
    <article className={`${className}`} {...rest}>
      <div className="flex">
        <div className="size-cart-item-image bg-secondary mr-4 aspect-square">
          <img
            src={item.thumbnail}
            alt={item.title}
            loading="lazy"
            className="size-full rounded-lg object-cover"
          />
        </div>
        {/*Item info*/}
        <div className="flex w-full min-w-0 flex-col justify-between">
          <div className="flex min-w-0 justify-between">
            <h3 className="line-clamp-2 flex-1 text-lg font-bold">
              {item.title}
            </h3>
            <Button className="self-start">
              <BinIcon className="text-red ml-2 aspect-square size-5 h-full cursor-pointer" />
            </Button>
          </div>

          {/*Item control*/}
          {isLarge && (
            <div className="flex items-center justify-between">
              <p className="text-card font-bold">${item.price}</p>
              <QuantitySelector
                value={currQuantity}
                onChangeQuantity={onChangeQuantity}
              />
            </div>
          )}
        </div>
      </div>

      {!isLarge && (
        <div className="flex items-center justify-between">
          <p className="text-card font-bold">${item.price}</p>
          <QuantitySelector
            value={currQuantity}
            onChangeQuantity={onChangeQuantity}
          />
        </div>
      )}
    </article>
  );
};

export default memo(CartItemCard);
