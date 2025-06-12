interface LoadingTextBlankProps
  extends Omit<React.ComponentPropsWithoutRef<"p">, "children"> {}

let LoadingTextBlank: React.FC<LoadingTextBlankProps> = ({
  className,
  ...rest
}) => {
  return (
    <p className={`bg-primary/10 w-full rounded-xl ${className}`} {...rest}>
      &nbsp;
    </p>
  );
};

export default LoadingTextBlank;
