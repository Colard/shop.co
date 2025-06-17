import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import useSingleProductApiSimulation from "../../api/useSingleProductApiSimulation";
import useNotFoundRedirect from "../../hooks/useNotFoundRedirect";
import ProductStructuredData from "../../components/ProductStructuredData";
import ItemGeneralInfo from "./ItemGeneralInfo";
import PageTitle from "../../components/PageTitle";
import ItemPageTabMenu from "./ItemPageTabMenu";
import ProductLinkWay from "./ProductLinkWay";
import AlsoLike from "../../sections/AlsoLike";

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

        <AlsoLike
          className="my-10"
          category={product?.category}
          productId={product?.id}
        />
      </Container>
    </div>
  );
};

export default ItemPage;
