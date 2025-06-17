interface FAQBlockProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {
  warrantyInformation?: string;
  shippingInformation?: string;
  returnPolicy?: string;
}

let FAQBlock: React.FC<FAQBlockProps> = ({
  className = "",
  warrantyInformation,
  shippingInformation,
  returnPolicy,
  ...rest
}) => {
  return (
    <section className={`flex flex-col gap-5 ${className}`} {...rest}>
      <h2 className="font-integralcf text-2xl font-bold">
        FAQ<span>s</span>
      </h2>

      {/*Warranty Information*/}
      {warrantyInformation && (
        <article className="inline">
          <h3 className="inline text-lg">Warranty Information</h3>
          {": "}
          <p className="base-text inline">{warrantyInformation}</p>
        </article>
      )}

      {/*Shipping Information*/}
      {shippingInformation && (
        <article className="inline">
          <h3 className="inline text-lg">Shipping Information</h3>
          {": "}
          <p className="base-text inline">{shippingInformation}</p>
        </article>
      )}

      {/*Warranty Information*/}
      {returnPolicy && (
        <article className="inline">
          <h3 className="inline text-lg">Return Policy</h3>
          {": "}
          <p className="base-text inline">{returnPolicy}</p>
        </article>
      )}
    </section>
  );
};

export default FAQBlock;
