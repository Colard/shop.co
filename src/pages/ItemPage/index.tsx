import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import LinkWay from "../../components/LinkWay";
import useSingleProductApiSimulation from "../../api/useSingleProductApiSimulation";
import TabMenu from "../../components/TabMenu";
import useItemLinkPath from "./useItemLinkPath";
import ItemIamges from "../../sections/ItemIamgesBlock";
import ItemPageInstruments from "../../sections/ItemPageInstruments";
import useNotFoundRedirect from "../../hooks/useNotFoundRedirect";

let ItemPage: React.FC = () => {
  const params = useParams();
  const { product, isLoading } = useSingleProductApiSimulation(
    +(params.id || -1),
  );

  useNotFoundRedirect(!product && !isLoading);
  const linkPath = useItemLinkPath(product);

  return (
    <div>
      <h1 className="sr-only">{product?.title || ""}</h1>
      <Container>
        <LinkWay pagePath={linkPath} className="my-5 md:mt-6 md:mb-9"></LinkWay>
        <section className="gap-10 xl:flow-root">
          <h2 className="sr-only">General info</h2>

          <ItemIamges
            className="h-image-block mx-auto w-full lg:max-w-152.5 xl:float-left xl:mx-0"
            images={product?.images || []}
            itemTitle={product?.title || ""}
            isLoading={isLoading}
          />
          <ItemPageInstruments
            product={product}
            isLoading={isLoading}
            className="mt-5 inline-block xl:mt-0 xl:ml-10"
          />
        </section>
        <TabMenu></TabMenu>
      </Container>
    </div>
  );
};

export default ItemPage;
