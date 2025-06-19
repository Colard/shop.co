import React from "react";
import VerificationMark from "../assets/icons/VerificationMark";
import Button from "../components/Button";

interface ModalProps {
  hideModal: () => void;
  header: string;
  children: React.ReactNode;
}

let SuccessModalBase: React.FC<ModalProps> = ({
  hideModal,
  children,
  header,
}) => {
  return (
    <div className="bg-bg-color rounded-2xl p-5">
      <p className="font-integralcf text-primary flex items-center gap-4 rounded-sm p-2 text-2xl font-bold">
        <VerificationMark className="text-green hidden h-[1em] md:block" />
        <span className="leading-none">{header}</span>
      </p>
      <div className="m-5">{children}</div>
      <div className="flex flex-row-reverse">
        <Button
          className="border-primary transform cursor-pointer border-1 px-2 py-1 text-lg transition-transform duration-300 hover:scale-95 active:scale-95"
          onClick={hideModal}
        >
          Return to Site
        </Button>
      </div>
    </div>
  );
};

export default SuccessModalBase;
