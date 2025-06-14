import { useEffect } from "react";
import { useModal } from "../contexts/ModalProviderContext";
import useData from "../contexts/DataSimulationContext";
import APIWarningModal from "../modals/APIWarningModal";

const APIWarningModalWatcher = () => {
  const data = useData();
  const { showModal, hideModal } = useModal();

  useEffect(() => {
    if (data === null) {
      showModal(<APIWarningModal hideWarning={hideModal} />);
    }
  }, [data, showModal, hideModal]);

  return null;
};

export default APIWarningModalWatcher;
