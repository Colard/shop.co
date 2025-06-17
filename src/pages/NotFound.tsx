import { Link } from "react-router-dom";
import SadSmileIcon from "../assets/icons/SadSmileIcon";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";

let NotFound: React.FC = () => {
  return (
    <>
      <PageTitle title="Page Not Found" />
      <Container className="p-4">
        <h1 className="sr-only">404. Page Not Found.</h1>
        <div className="font-integralcf flex min-h-[80vh] flex-col items-center justify-center text-4xl font-bold">
          <p className="text-8xl">
            4
            <SadSmileIcon className="inline aspect-square h-[1em]"></SadSmileIcon>
            4.
          </p>
          <p className="text-bg-color bg-primary rounded-2xl p-4">
            Page Not Found.
          </p>
          <Link
            to="/"
            className="transition-color hover:text-primary/60 mt-6 p-2 text-2xl duration-300"
          >
            Return to Home page
          </Link>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
