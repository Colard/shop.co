interface CategoryProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {}

let Category: React.FC<CategoryProps> = () => {
  return <>Category</>;
};

export default Category;
