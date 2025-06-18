import React from "react";
import Button from "../components/Button";
import RiskIcon from "../assets/icons/RiskIcon";

interface ModalProps {
  hideModal: () => void;
  header: string;
  children: React.ReactNode;
}

let WarningModalBase: React.FC<ModalProps> = ({
  hideModal,
  children,
  header,
}) => {
  return (
    <div className="bg-bg-color rounded-2xl p-5">
      <p className="bg-star-yellow font-integralcf flex items-center gap-4 rounded-sm p-2 text-2xl font-bold text-black">
        <RiskIcon className="bg-star-yellow h-[1em]"></RiskIcon>{" "}
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

export default WarningModalBase;
