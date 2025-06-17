import Button from "../../components/Button";
import QuantitySelector from "../../components/QuantitySelector";

interface InstrumentsFooterProps {
  isAvailable: boolean;
  onChangeQuantity: (value: number) => void;
}

let InstrumentsFooter: React.FC<InstrumentsFooterProps> = ({
  isAvailable,
  onChangeQuantity,
}) => {
  if (!isAvailable) {
    return <p className="text-discount text-2xl font-bold">Out of stock</p>;
  }

  return (
    <div className="mx-auto flex w-full justify-between gap-3 lg:gap-5">
      <QuantitySelector onChangeQuantity={onChangeQuantity} />
      <Button className="bg-primary text-bg-color max-w-100 flex-1">
        Add to Cart
      </Button>
    </div>
  );
};

export default InstrumentsFooter;
