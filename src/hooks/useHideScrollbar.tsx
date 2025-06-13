import { useEffect } from "react";

const useHideScrollbar = (isNeedToHide: boolean) => {
  console.log(isNeedToHide);
  useEffect(() => {
    if (isNeedToHide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNeedToHide]);
};

export default useHideScrollbar;
