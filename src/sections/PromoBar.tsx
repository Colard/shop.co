import React, { useEffect } from "react";
import Container from "../components/Container";

interface PromoBarProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let PromoBar: React.FC<PromoBarProps> = ({ className = "", ...rest }) => {
  const [visible, setVisible] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("promoBarDismissed");
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("promoBarDismissed", "true");

    setIsClosing(true);

    setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  return (
    <div
      className={`${className} bg-primary relative h-8 w-full sm:h-10 ${visible ? "" : "hidden"} ${
        isClosing ? "animate-close" : ""
      }`}
      {...rest}
    >
      <Container className="flex items-center justify-end">
        <p className="text-bg-color absolute inset-0 flex items-center justify-center text-sm">
          Sign up and get 20% off to your first order.&nbsp;
          <a
            href="#"
            className="font-medium underline decoration-0 underline-offset-3"
          >
            Sign Up Now
          </a>
        </p>
        <div className="relative hidden size-5 sm:block" onClick={dismiss}>
          <span className="bg-bg-color absolute inset-0 m-auto block h-0.5 w-[90%] rotate-45 transform"></span>
          <span className="bg-bg-color absolute inset-0 m-auto block h-0.5 w-[90%] -rotate-45 transform"></span>
        </div>
      </Container>
    </div>
  );
};

export default PromoBar;
