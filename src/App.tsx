import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import { DataSimulationProvider } from "./contexts/DataSimulationContext.tsx";
import RoutingScrollToTop from "./utils/RoutingScrollToTop.tsx";
import CategoryOverlay from "./pages/Category";
import ItemPage from "./pages/ItemPage";
import NotFound from "./pages/NotFound";
import { ModalContextProvider } from "./contexts/ModalProviderContext.tsx";
import APIWarningModalWatcher from "./components/APIWarningModalWatcher.tsx";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <DataSimulationProvider>
        <ModalContextProvider>
          <RoutingScrollToTop />
          <APIWarningModalWatcher />

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="page/:page" element={<CategoryOverlay />} />

              <Route path="product/:id" element={<ItemPage />}></Route>

              <Route path="cart" element={<Cart />} />

              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </ModalContextProvider>
      </DataSimulationProvider>
    </Router>
  );
}

export default App;
