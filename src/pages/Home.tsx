import NewArrivals from "../sections/NewArrivals";
import Brands from "../sections/Brands";
import Hero from "../sections/Hero";
import Container from "../components/Container";
import TopSelling from "../sections/TopSelling";
import DressStyles from "../sections/DressStyles";
import CommentsCarousel from "../sections/CommentsCarousel";

interface HomeProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {}

let Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Hero className="h-full min-h-screen md:pt-10" />
      <Brands />
      <NewArrivals className="pt-12 md:pt-18" />
      <Container>
        <hr className="border-primary/10 my-10 md:my-16" />
      </Container>
      <TopSelling />
      <DressStyles className="pt-12 lg:pt-20" />
      <CommentsCarousel className="mt-12 mb-12 md:mt-20 md:mb-20" />
    </>
  );
};

export default Home;
