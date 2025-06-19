import SuccessModalBase from "./SuccessModalBase";

interface ModalProps {
  hideModal: () => void;
}

const ThanksModal: React.FC<ModalProps> = ({ hideModal }) => {
  return (
    <SuccessModalBase header="Thanks for your order!" hideModal={hideModal}>
      <div className="space-y-2 text-lg">
        <p>
          <strong>Just a heads-up:</strong> this is a portfolio project.
        </p>
        <p>The products aren’t real - sorry! 😅</p>
        <p>
          But I truly appreciate you taking the time to explore it.{" "}
          <strong>Thank you!</strong>
        </p>
      </div>
    </SuccessModalBase>
  );
};

export default ThanksModal;
