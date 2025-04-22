import Container from "../components/Container";
import DressCard1 from "../assets/images/Dress_style_1.png";
import DressCard2 from "../assets/images/Dress_style_2.png";
import DressCard3 from "../assets/images/Dress_style_3.png";
import DressCard4 from "../assets/images/Dress_style_4.png";
import { tw } from "../utils/tailwindFunctions";

interface DressStylesProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {}

let DressStyles: React.FC<DressStylesProps> = ({ className = "", ...rest }) => {
  return (
    <Container className={className} {...rest}>
      <section
        className={` ${className} bg-secondary size-full rounded-xl px-6 pt-10 pb-7 md:px-16 md:pt-18 md:pb-19`}
        {...rest}
      >
        <h2 className="font-integralcf text-primary mb-7 text-center text-3xl md:mb-16">
          BROWSE BY dress STYLE
        </h2>

        <div className="wrap flex flex-wrap gap-4 md:gap-5">
          <DressCard
            src={DressCard1}
            title="Casual"
            className="grow lg:shrink-0 lg:grow-0"
          ></DressCard>
          <DressCard
            src={DressCard2}
            title="Formal"
            className="grow basis-90"
          ></DressCard>
          <DressCard
            src={DressCard3}
            title="Party"
            className="grow basis-90"
          ></DressCard>
          <DressCard
            src={DressCard4}
            title="Wedding"
            className="shrink-0 grow lg:grow-0"
          ></DressCard>
        </div>
      </section>
    </Container>
  );
};

interface DressCardProps {
  src: string;
  title: string;
  className?: string;
  onClick?: () => void;
}

let DressCard: React.FC<DressCardProps> = ({
  src,
  title,
  className = "",
  onClick,
}) => {
  const roundignClass = tw`rounded-[1.25rem]`;

  return (
    <div
      className={`${className} ${roundignClass} bg-bg-color h-dressing-img-height relative flex transform cursor-pointer justify-end overflow-clip transition-all duration-300 select-none hover:z-2 hover:scale-110`}
      onClick={onClick}
    >
      <img
        alt={title}
        src={src}
        className={`h-full w-auto object-cover`}
        draggable={false}
      />
      <p className="text-dressing-card absolute top-4 left-6 font-bold md:top-6 md:left-9">
        {title}
      </p>
    </div>
  );
};

export default DressStyles;
