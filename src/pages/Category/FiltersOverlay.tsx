import { useEffect, useMemo } from "react";
import Filters from "../../sections/Filters";
import { tw } from "../../utils/tailwindFunctions";

interface FiltersOverlayProps {
  isOpen: boolean;
  isLargeScreen: boolean;
  headerHeight: number;
  onClose: () => void;
}
let FiltersOverlay: React.FC<FiltersOverlayProps> = ({
  isOpen,
  isLargeScreen,
  headerHeight,
  onClose,
}) => {
  const filterClassName = tw`bg-bg-color fixed inset-0 z-60 h-full w-full transition-transform duration-300 sm:static sm:z-0 sm:w-50 sm:translate-y-0 md:h-auto lg:w-75`;
  const filterContainerClassName = tw`bg-primary/20 fixed inset-0 z-60 transition-opacity duration-300 sm:z-0 sm:contents`;
  const inOpenOnSmallScreen = isOpen && !isLargeScreen;

  const styles = useMemo(
    () => (isLargeScreen ? {} : { top: headerHeight }),
    [isLargeScreen, headerHeight],
  );

  useEffect(() => {
    if (isOpen && isLargeScreen) {
      onClose();
    }
  }, [isOpen, isLargeScreen, onClose]);

  return (
    <div
      className={`${filterContainerClassName} ${
        inOpenOnSmallScreen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
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
