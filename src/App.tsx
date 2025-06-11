import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import { DataSimulationProvider } from "./contexts/DataSimulationContext.tsx";
import RoutingScrollToTop from "./utils/RoutingScrollToTop.tsx";
import CategoryOverlay from "./pages/Category/CategoryOverlay.tsx";

function App() {
  return (
    <Router>
      <DataSimulationProvider>
        <RoutingScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="page/:page" element={<CategoryOverlay />} />
          </Route>
        </Routes>
      </DataSimulationProvider>
    </Router>
  );
}

export default App;
