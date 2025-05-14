import { useEffect, useState } from "react";

function useDropdownAlignment(
  wrapperRef: React.RefObject<HTMLElement | null>,
  dropdownWidth: number,
) {
  const [alignRight, setAlignRight] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const rect = wrapperRef.current?.getBoundingClientRect();
      if (!rect) return;

      const spaceRight = window.innerWidth - rect.left;
      const spaceLeft = rect.right;

      setAlignRight(spaceRight < dropdownWidth && spaceLeft > dropdownWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dropdownWidth, wrapperRef]);

  return alignRight;
}

export default useDropdownAlignment;
