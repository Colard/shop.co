import ItemIamges from "../../sections/ItemIamgesBlock";
import ItemPageInstruments from "../../sections/ItemPageInstruments";
import { Product } from "../../types/api.types";

interface ItemGeneralInfoProps {
  product: Product | null;
  isLoading: boolean;
}

let ItemGeneralInfo: React.FC<ItemGeneralInfoProps> = ({
  product,
  isLoading,
}) => {
  return (
    <section className="gap-10 xl:flex">
      <h2 className="sr-only">General info</h2>
      <ItemIamges
        className="h-image-block mx-auto w-full shrink-0 xl:mx-0 xl:max-w-152.5"
        images={product?.images || []}
        itemTitle={product?.title || ""}
        isLoading={isLoading}
      />
      <ItemPageInstruments
        product={product}
        isLoading={isLoading}
        className="xl:min-h-image-block mt-5 w-full xl:mt-0"
      />
    </section>
  );
};

export default ItemGeneralInfo;
