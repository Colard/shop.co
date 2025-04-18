import Button from "../components/Button";
import Container from "../components/Container";
import heroSm from "../assets/images/Hero-sm.png";

let Hero: React.FC = () => {
  return (
    <section className="bg-secondary text-primary/60 flex h-full min-h-screen flex-col bg-cover bg-center bg-no-repeat md:bg-[url('src/assets/images/Hero.png')] md:pt-10">
      <Container className="mt-10 flex max-w-150 flex-1 flex-col justify-center md:mt-0">
        <div className="max-w-150">
          <h1 className="font-integralcf text-primary text-4xl">
            FIND CLOTHES <br />
            THAT MATCHES
            <br /> YOUR STYLE
            <br />
          </h1>
          <p className="mt-5 md:mt-8">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button className="bg-primary text-secondary inset-shadow-secondary mt-6 h-13 w-full md:mt-8 md:max-w-52.5">
            Shop Now
          </Button>
          <div className="mt-6 flex flex-wrap justify-around gap-5 md:mt-8">
            <div>
              <p className="text-primary text-2xl font-bold">200+</p>
              <p>International Brands</p>
            </div>
            <div>
              <p className="text-primary text-2xl font-bold">2,000+</p>
              <p>Hight-Quality Products</p>
            </div>
            <div>
              <p className="text-primary text-2xl font-bold">30,000+</p>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </Container>
      <img
        height={448}
        src={heroSm}
        alt="Clothes Banner"
        className="min-h-112 w-full object-cover md:hidden"
        draggable={false}
      />
    </section>
  );
};

export default Hero;
