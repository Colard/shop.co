interface PriceProps {
  discount: number;
  price: number;
  className?: string;
}

let Price: React.FC<PriceProps> = ({ discount, price, className = "" }) => {
  let priceLabel: React.ReactNode = null;
  if (discount > 0) {
    const priceWithDiscount = (price * ((100 - discount) / 100)).toFixed(2);
    priceLabel = (
      <>
        <p>${priceWithDiscount}</p>
        <p className="text-old-price line-through">${price}</p>
        <div className="text-red bg-red/10 flex h-8 items-center justify-center rounded-full px-3 text-base font-medium md:px-3.5">
          <p>-{discount}%</p>
        </div>
      </>
    );
  } else {
    priceLabel = <p>${price}</p>;
  }

  return (
    <div
      className={`text-item-price flex items-center gap-2 font-bold md:gap-3 ${className}`}
    >
      {priceLabel}
    </div>
  );
};

export default Price;
