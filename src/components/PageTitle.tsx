import { memo } from "react";
import { Helmet } from "react-helmet-async";

interface PageTitleProps {
  title: string;
}

let PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  console.log(title);
  return (
    <Helmet>
      <title>{`Shop.Co - ${title}`}</title>
      <meta
        name="title"
        content={`Shop.Co - ${title}`}
        data-react-helmet="true"
      />
    </Helmet>
  );
};

export default memo(PageTitle);
