import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import LinkWay from "../../components/LinkWay";
import useSingleProductApiSimulation from "../../api/useSingleProductApiSimulation";
import useItemLinkPath from "./useItemLinkPath";
import useNotFoundRedirect from "../../hooks/useNotFoundRedirect";
import { Product } from "../../types/api.types";
import ProductStructuredData from "../../components/ProductStructuredData";
import ItemGeneralInfo from "./ItemGeneralInfo";
import PageTitle from "../../components/PageTitle";
import ItemPageTabMenu from "./ItemPageTabMenu";

let ItemPage: React.FC = () => {
  const params = useParams();

  const { product, isLoading } = useSingleProductApiSimulation(
    +(params.id || -1),
  );

  useNotFoundRedirect(!product && !isLoading);

  return (
    <div className="mb-5">
      <h1 className="sr-only">{product?.title || ""}</h1>

      {product && <PageTitle title={product.title} />}
      {product && <ProductStructuredData product={product} />}
      <Container>
        <ProductLinkWay product={product} />

        <ItemGeneralInfo product={product} isLoading={isLoading} />

        <ItemPageTabMenu product={product} />
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
