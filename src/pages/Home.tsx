import NewArrivals from "../sections/NewArrivals";
import Brands from "../sections/Brands";
import Hero from "../sections/Hero";
import Container from "../components/Container";
import TopSelling from "../sections/TopSelling";

interface HomeProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {}

let Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Hero />
      <Brands />
      <NewArrivals />
      <Container>
        <hr className="border-primary/10 my-10 md:my-16" />
      </Container>
      <TopSelling />
    </>
  );
};

export default Home;
