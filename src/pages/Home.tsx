import Hero from "../sections/Hero";

interface HomeProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {}

let Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
