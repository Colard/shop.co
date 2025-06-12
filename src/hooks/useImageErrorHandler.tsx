import { SyntheticEvent, useCallback, useState } from "react";
import altImage from "../assets/images/error-image-photo-icon.png";

const useImageErrorHandler = () => {
  const [isLoadingError, setIsLoadingError] = useState(false);

  const reloadCallback = useCallback(() => setIsLoadingError(false), []);

  const errorCallback = useCallback(
    (e: SyntheticEvent<HTMLImageElement, Event>) => {
      const target = e.target as HTMLImageElement;
      target.onerror = null;
      target.src = altImage;
      setIsLoadingError(true);
    },
    [],
  );

  return { errorCallback, isLoadingError, reloadCallback };
};

export default useImageErrorHandler;
