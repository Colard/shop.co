interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  
}

let Container: React.FC<ContainerProps> = ({ className, children, ...rest }) => {
  return (
    <div className={`px-container max-w-[1440px] h-full w-full ${className || ""}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;