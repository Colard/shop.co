import useTailwindBreakpoint from "../../hooks/useTailwindBreakpoint";
import Thumbnail from "./Thumbnail";

interface ImagesListProps {
  onSelect: (index: number) => void;
  images: string[];
  itemTitle: string;
  selectedImage: number;
}

let ImagesList: React.FC<ImagesListProps> = ({
  images,
  itemTitle,
  selectedImage,
  onSelect,
}) => {
  if (images.length <= 1 || !images) return null;
  const isLarge = useTailwindBreakpoint("--breakpoint-sm");

  return (
    <div
      className="flex gap-3 overflow-y-auto sm:flex-col"
      dir={isLarge ? "rtl" : "ltr"}
    >
      {images.map((image, index) => (
        <Thumbnail
          key={image}
          image={image}
          isSelected={index === selectedImage}
          itemTitle={itemTitle}
          onClick={() => onSelect(index)}
        ></Thumbnail>
      ))}
    </div>
  );
};

export default ImagesList;
