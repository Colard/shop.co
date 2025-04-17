import React, { useEffect } from "react";
import Container from "../components/Container";

let PromoBar: React.FC = () => {
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
      className={
        "w-full h-8 sm:h-10 bg-primary sticky " +
        (visible ? "" : "hidden ") +
        (isClosing ? "animate-close " : "")
      }
    >
      <Container className="flex justify-end items-center">
        <p className="text-sm text-white absolute inset-0 flex items-center justify-center">
          Sign up and get 20% off to your first order.&nbsp;
          <a
            href="#"
            className="font-medium underline decoration-0 underline-offset-3"
          >
            Sign Up Now
          </a>
        </p>
        <div className="size-5 relative hidden sm:block" onClick={dismiss}>
          <span className="h-0.5 w-[90%] bg-bg-color block transform rotate-45 absolute inset-0 m-auto"></span>
          <span className="h-0.5 w-[90%] bg-bg-color block transform -rotate-45 absolute inset-0 m-auto"></span>
        </div>
      </Container>
    </div>
  );
};

export default PromoBar;
