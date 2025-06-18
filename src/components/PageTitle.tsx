import { memo } from "react";

interface PageTitleProps {
  title: string;
}

let PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <>
      <title>{`Shop.Co - ${title}`}</title>
      <meta
        name="title"
        content={`Shop.Co - ${title}`}
        data-react-helmet="true"
      />
    </>
  );
};

export default memo(PageTitle);
