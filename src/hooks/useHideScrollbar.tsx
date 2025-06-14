import { useEffect } from "react";

const useHideScrollbar = (isNeedToHide: boolean) => {
  useEffect(() => {
    if (isNeedToHide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNeedToHide]);
};

export default useHideScrollbar;
