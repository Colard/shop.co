import { useEffect, useState } from "react";
import HeaderResizeObserver from "./HeaderResizeObserver";

const useHeaderHeight = () => {
  const headerObserver = HeaderResizeObserver.getInstance();
  const [height, setHeight] = useState(headerObserver.getCurrentHeight());

  useEffect(() => {
    const cb = (h: number) => setHeight(h);
    headerObserver.subscribe(cb);

    if (headerObserver.getCurrentHeight()) {
      setHeight(headerObserver.getCurrentHeight());
    }

    return () => {
      headerObserver.unsubscribe(cb);
    };
  }, []);

  return height;
};

export default useHeaderHeight;
