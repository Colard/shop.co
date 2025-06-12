import loading from "../assets/images/load-icon.png";

interface LoadingCardProps {
  className: string;
}

let LoadingImage: React.FC<LoadingCardProps> = ({ className }) => {
  return (
    <div
      className={`bg-secondary flex items-center justify-center ${className}`}
    >
      <img
        draggable={false}
        className={"animate-loadingSpin size-25 origin-center"}
        src={loading}
        alt={"loading..."}
      ></img>
    </div>
  );
};

export default LoadingImage;
