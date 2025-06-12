import Button from "../components/Button";
import Container from "../components/Container";
import heroSm from "../assets/images/Hero-sm.png";

interface HeroProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let Hero: React.FC<HeroProps> = ({ className = "", ...rest }) => {
  return (
    <section
      className={`${className} bg-secondary base-text flex flex-col bg-cover bg-center bg-no-repeat md:bg-[url('src/assets/images/Hero.png')]`}
      {...rest}
    >
      <Container className="text-shadow-secondary mt-10 flex flex-1 flex-col justify-center text-shadow-md md:mt-0">
        <div className="max-w-180">
          <h2 className="font-integralcf text-primary text-4xl">
            DISCOVER PRODUCTS <br />
            THAT MATCH YOUR
            <br /> LIFESTYLE
            <br />
          </h2>
          <p className="mt-5 md:mt-8">
            Explore our diverse collection of high-quality goods — from fashion
            and electronics to home essentials — all carefully selected to
            reflect your taste and meet your everyday needs.
          </p>
          <Button className="bg-primary text-secondary inset-shadow-secondary mt-6 h-13 w-full md:mt-8 md:max-w-52.5">
            Shop Now
          </Button>
          <div className="mt-6 flex flex-wrap justify-around gap-5 md:mt-8 md:justify-start">
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
