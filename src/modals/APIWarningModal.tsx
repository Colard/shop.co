import WarningModalBase from "./WarningModalBase";

interface ModalProps {
  hideWarning: () => void;
}

let APIWarningModal: React.FC<ModalProps> = ({ hideWarning }) => {
  return (
    <WarningModalBase header="API WARNING!" hideModal={hideWarning}>
      <p>
        The current <b>site uses the external API</b> "DummyJSON".
      </p>
      <p>
        Right now, <b>data</b> from the API <b>hasn't been received</b>. :c
      </p>
      <p>
        <b>The server might be down</b> or the API may have been deprecated.
      </p>
    </WarningModalBase>
  );
};

export default APIWarningModal;
