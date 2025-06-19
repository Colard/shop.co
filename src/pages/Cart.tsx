import Container from "../components/Container";
import LinkWay from "../components/LinkWay";
import PageTitle from "../components/PageTitle";
import CartItemsList from "../sections/CartItemsList";

let Cart: React.FC = () => {
  return (
    <Container>
      <PageTitle title="Cart" />
      <LinkWay pagePath={["Cart"]} className="my-2 md:my-6" />
      <h1 className="font-integralcf text-2xl font-bold">Your cart</h1>

      <div className="mb-5 flex flex-row flex-wrap md:mb-6">
        <CartItemsList className="mt-5 flex-1 md:mt-6" />
      </div>
    </Container>
  );
};

export default Cart;
