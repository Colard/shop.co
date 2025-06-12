interface LoadingTextBlankProps
  extends Omit<React.ComponentPropsWithoutRef<"p">, "children"> {
  lines?: number;
}

let LoadingTextBlank: React.FC<LoadingTextBlankProps> = ({
  className,
  lines = 1,
  ...rest
}) => {
  return (
    <>
      {Array.from({ length: lines }).map((_, i) => (
        <p
          key={i}
          className={`bg-primary/10 w-full rounded-xl text-transparent select-none ${className}`}
          {...rest}
        >
          &nbsp;
        </p>
      ))}
    </>
  );
};

export default LoadingTextBlank;
