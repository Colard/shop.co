interface ItemsLineProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  header: string;
}

let NewArrivals: React.FC<ItemsLineProps> = ({
  className = "",
  header,
  ...rest
}) => {
  return (
    <div className={`my-class ${className}`} {...rest}>
      <h2 className="font-integralcf text-primary text-3xl">{header}</h2>
    </div>
  );
};

export default NewArrivals;
