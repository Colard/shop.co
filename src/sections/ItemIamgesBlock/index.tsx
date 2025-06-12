import { useState } from "react";
import { tw } from "../../utils/tailwindFunctions";
import useImageErrorHandler from "../../hooks/useImageErrorHandler";
import ImagesList from "./ImagesList";
import LoadingImage from "../../components/LoadingImage";

interface ItemIamgesProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  images: string[];
  itemTitle: string;
  isLoading?: boolean;
}

let ItemIamges: React.FC<ItemIamgesProps> = ({
  className = "",
  images,
  itemTitle,
  isLoading,
  ...rest
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { isLoadingError, errorCallback, reloadCallback } =
    useImageErrorHandler();

  const isfullSizedImage =
    images.length <= 1 || !images ? "h-full" : "h-image-block-main";
  const errorImageClassName = tw`size-25 opacity-20`;

  const onSelect = (index: number) => {
    setSelectedImage(index);
    reloadCallback();
  };

  if (isLoading) {
    return (
      <LoadingImage
        className={`size-full animate-pulse rounded-[1.25rem] ${className}`}
      />
    );
  }

  return (
    <article
      className={`flex flex-col gap-3 sm:flex-row-reverse ${className}`}
      {...rest}
    >
      <h3 className="sr-only">Product images</h3>
      <div
        className={`bg-secondary flex flex-1 items-center justify-center rounded-[1.25rem] ${isfullSizedImage} sm:h-full`}
      >
        <img
          className={`${isLoadingError ? errorImageClassName : "mx-auto h-full w-auto object-cover"}`}
          src={images[selectedImage]}
          alt={`${itemTitle} current image`}
          onError={errorCallback}
        ></img>
      </div>

      <ImagesList
        images={images}
        itemTitle={itemTitle}
        selectedImage={selectedImage}
        onSelect={onSelect}
      ></ImagesList>
    </article>
  );
};

export default ItemIamges;
