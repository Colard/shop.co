import CalvinKleinIcon from "../assets/icons/brands/CalvinKleinIcon";
import GucciIcon from "../assets/icons/brands/GucciIcon";
import PradaIcon from "../assets/icons/brands/PradaIcon";
import VersaceIcon from "../assets/icons/brands/VersaceIcon";
import ZaraIcon from "../assets/icons/brands/ZaraIcon";
import Container from "../components/Container";

interface BrandsProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let Brands: React.FC<BrandsProps> = ({ className, ...rest }) => {
  return (
    <section className={`bg-primary text-bg-color ${className}`} {...rest}>
      <h2 className="sr-only">Our Brands</h2>
      <Container className="flex flex-wrap items-center justify-around gap-x-2 gap-y-5 py-10 md:gap-5 xl:justify-between">
        <VersaceIcon className="h-6 w-auto md:h-8"></VersaceIcon>
        <ZaraIcon className="h-6.5 w-auto md:h-10"></ZaraIcon>
        <GucciIcon className="h-6.5 w-auto md:h-9"></GucciIcon>
        <PradaIcon className="h-5 w-auto md:h-8"></PradaIcon>
        <CalvinKleinIcon className="h-5 w-auto md:h-8"></CalvinKleinIcon>
      </Container>
    </section>
  );
};

export default Brands;
