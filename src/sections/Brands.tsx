import CalvinKleinIcon from "../assets/icons/brands/CalvinKleinIcon";
import GucciIcon from "../assets/icons/brands/GucciIcon";
import PradaIcon from "../assets/icons/brands/PradaIcon";
import VersaceIcon from "../assets/icons/brands/VersaceIcon";
import ZaraIcon from "../assets/icons/brands/ZaraIcon";
import Container from "../components/Container";

let Brands: React.FC = () => {
  return (
    <section className="bg-primary text-bg-color">
      <Container className="flex flex-wrap items-center justify-around gap-5 py-10 xl:justify-between">
        <VersaceIcon></VersaceIcon>
        <ZaraIcon></ZaraIcon>
        <GucciIcon></GucciIcon>
        <PradaIcon></PradaIcon>
        <CalvinKleinIcon></CalvinKleinIcon>
      </Container>
    </section>
  );
};

export default Brands;
