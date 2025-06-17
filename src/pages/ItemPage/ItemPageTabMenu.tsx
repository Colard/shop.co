import { useMemo, useState } from "react";
import TabMenu from "../../components/TabMenu";
import ProductDetails from "../../sections/ProductDetails";
import { Product } from "../../types/api.types";
import { tw } from "../../utils/tailwindFunctions";
import ReviewsList from "../../sections/ReviewsList";
import FAQBlock from "../../sections/FAQBlock";

interface ItemPageTabMenuProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  product: Product | null;
}

type TTabMenuPages = "description" | "reviews" | "faqs";

let ItemPageTabMenu: React.FC<ItemPageTabMenuProps> = ({ product }) => {
  const { menuSettings, activeTabPage } = useTabMenuItems();

  const pageBaseClass = tw`w-full transition duration-300 ease-in-out`;
  const isHiddenPageClassName = tw`h-0 overflow-hidden`;

  return (
    <div>
      <TabMenu
        className="mt-12 mb-4 lg:mt-20"
        menuElements={menuSettings}
      ></TabMenu>

      {/*Details*/}
      <ProductDetails
        description={product?.description}
        tags={product?.tags}
        meta={product?.meta}
        className={`${pageBaseClass} ${activeTabPage === "description" ? "" : isHiddenPageClassName}`}
      />

      {/*Reviews*/}
      <ReviewsList
        reviews={product?.reviews || []}
        className={`${pageBaseClass} ${activeTabPage === "reviews" ? "" : isHiddenPageClassName}`}
      />
      {/*FAQs*/}
      <FAQBlock
        warrantyInformation={product?.warrantyInformation}
        shippingInformation={product?.shippingInformation}
        returnPolicy={product?.returnPolicy}
        className={`${pageBaseClass} ${activeTabPage === "faqs" ? "" : isHiddenPageClassName}`}
      />
    </div>
  );
};

export default ItemPageTabMenu;

const useTabMenuItems = () => {
  const [activePage, setActivePage] = useState<TTabMenuPages>("description");

  const setPage = (page: TTabMenuPages) => () => {
    setActivePage(page);
  };

  const menuSettings = useMemo(
    () => [
      {
        title: "Description",
        callBack: setPage("description"),
      },
      {
        title: "Rating & Reviews",
        callBack: setPage("reviews"),
      },
      { title: "FAQs", callBack: setPage("faqs") },
    ],
    [],
  );

  return { menuSettings, activeTabPage: activePage };
};
