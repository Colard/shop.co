import WarningModalBase from "../WarningModalBase";

interface NoItemsQuantityModalProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  hideModal: () => void;
  title: string;
}

let NoItemsQuantityModal: React.FC<NoItemsQuantityModalProps> = ({
  hideModal,
  title,
}) => {
  return (
    <WarningModalBase header="No quantity!" hideModal={hideModal}>
      <p className="text-lg">
        First set quantity for <span className="font-bold">"{title}"</span>,{" "}
        please!
      </p>
    </WarningModalBase>
  );
};

export default NoItemsQuantityModal;
