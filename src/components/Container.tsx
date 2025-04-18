interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {}

let Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={`px-container mx-auto h-full w-full max-w-[1440px] ${className || ""}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
