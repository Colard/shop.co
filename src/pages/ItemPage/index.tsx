import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import LinkWay from "../../components/LinkWay";
import useSingleProductApiSimulation from "../../api/useSingleProductApiSimulation";
import TabMenu from "../../components/TabMenu";
import useItemLinkPath from "./useItemLinkPath";
import useNotFoundRedirect from "../../hooks/useNotFoundRedirect";
import { Product } from "../../types/api.types";
import ProductStructuredData from "../../components/ProductStructuredData";
import { useMemo, useState } from "react";
import ItemGeneralInfo from "./ItemGeneralInfo";
import PageTitle from "../../components/PageTitle";

let ItemPage: React.FC = () => {
  const params = useParams();
  const [activeTab, setActiveTab] = useState(0);

  const tabMenuItems = useMemo(
    () => [
      { title: "Description", callBack: () => {} },
      { title: "Rating & Reviews", callBack: () => {} },
      { title: "FAQs", callBack: () => {} },
    ],
    [],
  );

  const { product, isLoading } = useSingleProductApiSimulation(
    +(params.id || -1),
  );

  useNotFoundRedirect(!product && !isLoading);

  return (
    <div>
      <h1 className="sr-only">{product?.title || ""}</h1>

      {product && <PageTitle title={product.title} />}
      {product && <ProductStructuredData product={product} />}
      <Container>
        <ProductLinkWay product={product} />

        <ItemGeneralInfo product={product} isLoading={isLoading} />

        {/* Pages */}
        <TabMenu
          activeTab={activeTab}
          className="mt-12 mb-20 lg:mt-20"
          menuElements={tabMenuItems}
        ></TabMenu>

        <div></div>
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
