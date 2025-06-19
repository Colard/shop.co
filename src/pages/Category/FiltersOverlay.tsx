import { useEffect, useMemo } from "react";
import Filters from "../../sections/Filters";
import { tw } from "../../utils/tailwindFunctions";
import useHeaderHeight from "../../hooks/useHeaderHeight";
import useTailwindBreakpoint from "../../hooks/useTailwindBreakpoint";

interface FiltersOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}
let FiltersOverlay: React.FC<FiltersOverlayProps> = ({ isOpen, onClose }) => {
  const headerHeight = useHeaderHeight();
  const isLargeScreen = useTailwindBreakpoint("--breakpoint-sm");

  const filterClassName = tw`bg-bg-color border-primary/10 fixed inset-0 z-60 h-full w-full rounded-[1.25rem] border-1 transition-transform duration-300 sm:static sm:z-0 sm:h-min sm:w-50 sm:translate-y-0 lg:w-75`;
  const filterContainerClassName = tw`bg-primary/20 fixed inset-0 z-60 transition-opacity duration-300 sm:z-0 sm:contents`;
  const inOpenOnSmallScreen = isOpen && !isLargeScreen;

  const styles = useMemo(
    () =>
      isLargeScreen
        ? {}
        : { top: headerHeight, height: `calc(100vh - ${headerHeight}px)` },
    [isLargeScreen, headerHeight],
  );

  useEffect(() => {
    if (isOpen && isLargeScreen) {
      onClose();
    }
  }, [isOpen, isLargeScreen, onClose]);

  return (
    <div
      className={`${filterContainerClassName} ${inOpenOnSmallScreen ? "opacity-100" : "opacity-0"} ${isOpen || isLargeScreen ? "pointer-events-auto" : "pointer-events-none"} `}
    >
      <Filters
        className={`${filterClassName} ${isOpen && !isLargeScreen ? "translate-y-0" : "translate-y-full"}`}
        style={styles}
        closing={onClose}
      />
    </div>
  );
};

export default FiltersOverlay;
