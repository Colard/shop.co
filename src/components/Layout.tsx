import { Outlet } from "react-router-dom";
import Header from "../sections/Header";
import PromoBar from "../sections/PromoBar";
import Footer from "../sections/Footer";
import useData from "../contexts/DataSimulationContext";
import { useModal } from "../contexts/ModalProviderContext";
import APIWarningModal from "../modals/APIWarningModal";
import { useEffect } from "react";

interface LayoutProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {}

let Layout: React.FC<LayoutProps> = ({ className, ...rest }) => {
  const data = useData();
  const { showModal: showWarning, hideModal: hideWarning } = useModal();

  useEffect(() => {
    if (data === null) {
      showWarning(<APIWarningModal hideWarning={hideWarning} />);
    }
  }, [data, showWarning, hideWarning]);

  return (
    <div {...rest} className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-50" id="header">
        <PromoBar className="h-8 w-full md:h-10" />

        <Header />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
