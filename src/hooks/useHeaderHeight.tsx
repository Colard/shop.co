import { useEffect, useState } from "react";

const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    let header = document.getElementById("header");
    if (!header) return;

    const updateHeaderHeight = () => {
      setHeaderHeight(header.offsetHeight);
    };

    const observer = new ResizeObserver(updateHeaderHeight);

    observer.observe(header);

    return () => {
      observer.disconnect();
    };
  }, []);

  return headerHeight;
};

export default useHeaderHeight;
