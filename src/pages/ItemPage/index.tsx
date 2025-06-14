import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import LinkWay from "../../components/LinkWay";
import useSingleProductApiSimulation from "../../api/useSingleProductApiSimulation";
import TabMenu from "../../components/TabMenu";
import useItemLinkPath from "./useItemLinkPath";
import ItemIamges from "../../sections/ItemIamgesBlock";
import ItemPageInstruments from "../../sections/ItemPageInstruments";
import useNotFoundRedirect from "../../hooks/useNotFoundRedirect";
import { memo } from "react";
import { Product } from "../../types/api.types";

const tabMenuItems = [
  { title: "Description", callBack: () => {} },
  { title: "Rating & Reviews", callBack: () => {} },
  { title: "FAQs", callBack: () => {} },
];

let ItemPage: React.FC = () => {
  const params = useParams();
  const { product, isLoading } = useSingleProductApiSimulation(
    +(params.id || -1),
  );

  useNotFoundRedirect(!product && !isLoading);

  return (
    <div>
      <h1 className="sr-only">{product?.title || ""}</h1>
      <Container>
        <section className="gap-10 xl:flex">
          <h2 className="sr-only">General info</h2>
          <ProductLinkWay product={product} />
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
        <TabMenu
          className="mt-12 mb-20 lg:mt-20"
          menuElements={tabMenuItems}
        ></TabMenu>
      </Container>
    </div>
  );
};

export default ItemPage;

const ProductLinkWay: React.FC<{ product: Product | null }> = ({ product }) => {
  const linkPath = useItemLinkPath(product);
  return (
    <LinkWay pagePath={linkPath} className="my-5 md:mt-6 md:mb-9"></LinkWay>
  );
};
