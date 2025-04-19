interface ItemsScrollProps<T>
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  elemens: T[];
  renderFunction: (item: T) => React.ReactNode;
}

function ItemsScroll<T>({
  className,
  elemens,
  renderFunction,
  ...rest
}: ItemsScrollProps<T>) {
  return (
    <div className={`my-class ${className || ""}`} {...rest}>
      {elemens.map((item, index) => (
        <div key={index}>{renderFunction(item)}</div>
      ))}
    </div>
  );
}

export default ItemsScroll;
