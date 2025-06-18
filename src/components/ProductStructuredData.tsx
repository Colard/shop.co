import { Product } from "../types/api.types";
import { checkInStok } from "../utils/productsHeleprs";

const ProductStructuredData: React.FC<{ product: Product }> = ({ product }) => {
  const inStock = checkInStok(product.availabilityStatus);

  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product?.title || "Product name",
        image: product?.thumbnail,
        description: product?.description || "",
        offers: {
          "@type": "Offer",
          url: window.location.href,
          priceCurrency: "USD",
          price: product?.price || "0",
          availability: inStock
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
          itemCondition: "https://schema.org/NewCondition",
        },
      })}
    </script>
  );
};

export default ProductStructuredData;
