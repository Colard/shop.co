import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import Category from "./pages/Category/Category.tsx";
import { DataSimulationProvider } from "./contexts/DataSimulationContext.tsx";
import RoutingScrollToTop from "./utils/RoutingScrollToTop.tsx";

function App() {
  return (
    <Router>
      <DataSimulationProvider>
        <RoutingScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="page/:page" element={<Category />}></Route>
          </Route>
        </Routes>
      </DataSimulationProvider>
    </Router>
  );
}

export default App;
