interface ItemCardProps
  extends Omit<React.ComponentPropsWithoutRef<"article">, "children"> {}

let ItemCard: React.FC<ItemCardProps> = ({ className, ...rest }) => {
  return (
    <article className={`my-class ${className || ""}`} {...rest}>
      <h3></h3>
    </article>
  );
};

export default ItemCard;
