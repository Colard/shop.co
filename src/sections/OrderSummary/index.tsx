import { useCartStore } from "../../stores/cartStore";
import PromoCodeForm from "./PromoCodeForm";
import ToCheckoutButton from "./ToCheckoutButton";

interface OrderSummaryProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let OrderSummary: React.FC<OrderSummaryProps> = ({
  className = "",
  ...rest
}) => {
  const { items } = useCartStore();

  const fullPrice = +items
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const discountSum = +items
    .reduce((acc, el) => {
      return acc + (el.price * el.discount) / 100;
    }, 0)
    .toFixed(2);

  const deliveryFee = 15;

  const finalPrice = +(fullPrice - discountSum + deliveryFee).toFixed(2);

  return (
    <section
      className={`border-primary/10 rounded-[1.25rem] border-1 p-3 md:p-5 ${className}`}
      {...rest}
    >
      <h2 className="text-card font-bold">Order Summary</h2>

      <div className="base-text flex flex-col gap-5 py-4 *:flex *:justify-between md:py-6">
        <div>
          <p>Subtotal</p>
          <p className="text-primary font-bold">${fullPrice}</p>
        </div>

        {discountSum > 0 && (
          <div>
            <p>Discount</p>
            <p className="text-red font-bold">-${discountSum}</p>
          </div>
        )}

        <div>
          <p>Delivery Fee</p>
          <p className="text-primary font-bold">${deliveryFee}</p>
        </div>

        <hr className="border-primary/10 border-1"></hr>

        <div>
          <p className="text-primary">Total</p>
          <p className="text-primary text-card font-bold">${finalPrice}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="max-w-150 flex-1">
          <PromoCodeForm />
          <ToCheckoutButton className="mt-4 md:mt-6" />
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
