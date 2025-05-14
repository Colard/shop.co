import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const isReload =
  (
    window?.performance?.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming
  )?.type === "reload";

let hasNavigated = false;

const RoutingScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (!hasNavigated && isReload) {
      hasNavigated = true;
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    hasNavigated = true;
  }, [location]);

  return null;
};

export default RoutingScrollToTop;
