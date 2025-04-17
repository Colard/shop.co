import { Outlet } from "react-router-dom";
import Header from "../sections/Header";
import PromoBar from "../sections/PromoBar";
import Footer from "../sections/Footer";

interface LayoutProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {}

let Layout: React.FC<LayoutProps> = ({ className, ...rest }) => {
  return (
    <div {...rest} className="min-h-screen flex flex-col">
      <PromoBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
