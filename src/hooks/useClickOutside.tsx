import { RefObject, useEffect } from "react";

function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handleClick?: () => void,
  extraRefs: RefObject<HTMLElement | null>[] = [],
) {
  useEffect(() => {
    if (!handleClick) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const main = ref.current;

      if (
        main &&
        !main.contains(target) &&
        !extraRefs.some((extraRef) => extraRef.current?.contains(target))
      ) {
        handleClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClick]);
}

export default useClickOutside;
