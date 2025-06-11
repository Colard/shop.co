import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import { DataSimulationProvider } from "./contexts/DataSimulationContext.tsx";
import RoutingScrollToTop from "./utils/RoutingScrollToTop.tsx";
import CategoryOverlay from "./pages/Category/CategoryOverlay.tsx";
import ItemPage from "./pages/ItemPage.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {
  return (
    <Router>
      <DataSimulationProvider>
        <RoutingScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="page/:page" element={<CategoryOverlay />} />

            <Route path="product/:id" element={<ItemPage />}></Route>

            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </DataSimulationProvider>
    </Router>
  );
}

export default App;
