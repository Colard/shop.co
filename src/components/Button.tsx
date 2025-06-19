interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

let Button: React.FC<ButtonProps> = ({
  className = "",
  children,
  onClick,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full font-medium transition-all duration-300 hover:scale-95 active:scale-95 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
