import useImageErrorHandler from "../../hooks/useImageErrorHandler";
import { tw } from "../../utils/tailwindFunctions";

interface ThumbnailProps {
  image: string;
  isSelected: boolean;
  itemTitle: string;
  onClick: () => void;
}

let Thumbnail: React.FC<ThumbnailProps> = ({
  onClick,
  itemTitle,
  isSelected,
  image,
}) => {
  const { isLoadingError, errorCallback } = useImageErrorHandler();

  const errorImageClassName = tw`size-15 opacity-20`;
  const containerClassName = tw`bg-secondary relative flex h-full w-1/3 max-w-38 min-w-25 cursor-pointer items-center justify-center rounded-[1.25rem] sm:h-1/3 sm:w-38`;
  const selectedClassName = tw`after:border-primary after:absolute after:inset-0 after:rounded-[1.25rem] after:border-1 after:content-['']`;
  return (
    <div
      className={`${containerClassName} ${isSelected ? selectedClassName : ""}`}
      onClick={onClick}
    >
      <img
        className={
          isLoadingError ? errorImageClassName : `size-full object-cover`
        }
        src={image}
        alt={`${itemTitle}`}
        onError={errorCallback}
      />
    </div>
  );
};

export default Thumbnail;
