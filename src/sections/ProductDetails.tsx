import { Meta } from "../types/api.types";

interface ProductDetailsProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {
  description?: string;
  meta?: Meta;
  tags?: string[];
}

let ProductDetails: React.FC<ProductDetailsProps> = ({
  className = "",
  description,
  meta,
  tags,
  ...rest
}) => {
  const updatedDate = new Date(meta?.updatedAt || "").toLocaleDateString();

  return (
    <section className={`flex flex-col gap-5 ${className}`} {...rest}>
      <h2 className="sr-only">Product Details</h2>

      {/*Description*/}
      {description && (
        <article>
          <h3 className="sr-only">Description</h3>
          <p className="base-text">{description}</p>
        </article>
      )}

      {/*Tags*/}
      {tags && (
        <article className="base-text inline">
          <h3 className="inline">Tags</h3>
          {": "}
          <p className="inline">{tags.map((el) => `#${el}`).join(" ")}</p>
        </article>
      )}

      {/*Meta*/}
      {meta && (
        <article className="base-text inline">
          <h3 className="inline">Last Update</h3>
          {": "}
          <p className="inline">{updatedDate}</p>
        </article>
      )}
    </section>
  );
};

export default ProductDetails;
