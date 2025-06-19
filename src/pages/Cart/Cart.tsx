import Container from "../../components/Container";
import LinkWay from "../../components/LinkWay";
import PageTitle from "../../components/PageTitle";
import CartContent from "./CartContent";

let Cart: React.FC = () => {
  return (
    <Container className="pb-10">
      <PageTitle title="Cart" />
      <LinkWay pagePath={["Cart"]} className="my-2 md:my-6" />
      <h1 className="font-integralcf text-2xl font-bold">Your cart</h1>

      <CartContent />
    </Container>
  );
};

export default Cart;
