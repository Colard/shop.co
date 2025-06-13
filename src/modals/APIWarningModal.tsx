import RiskIcon from "../assets/icons/RiskIcon";
import Button from "../components/Button";

interface ModalProps {
  hideWarning: () => void;
}

let APIWarningModal: React.FC<ModalProps> = ({ hideWarning }) => {
  return (
    <div className="bg-bg-color rounded-2xl p-5">
      <p className="bg-star-yellow flex items-center rounded-sm px-2 text-2xl font-bold text-black">
        <RiskIcon className="bg-star-yellow h-[1em]"></RiskIcon> WARNING!
      </p>
      <div className="m-5">
        <p>
          The current <b>site uses the external API</b> "DummyJSON".
        </p>
        <p>
          Right now, <b>data</b> from the API <b>hasn't been received</b>. :c
        </p>
        <p>
          <b>The server might be down</b> or the API may have been deprecated.
        </p>
      </div>
      <div className="flex flex-row-reverse">
        <Button
          className="border-primary transform cursor-pointer border-1 px-2 py-1 text-lg transition-transform duration-300 hover:scale-95 active:scale-95"
          onClick={hideWarning}
        >
          Return to Site
        </Button>
      </div>
    </div>
  );
};

export default APIWarningModal;
