import { memo } from "react";
import { useSearchContext } from "../../../contexts/SearchInputContext";
import { Link } from "react-router-dom";

let SearchResult: React.FC = memo(() => {
  const { isOpen, isLoading, data } = useSearchContext();

  if (!isOpen) return null;

  if (isLoading) {
    return <p className="bg-secondary h-10 p-2 text-center">Loading...</p>;
  }

  if (data?.length === 0) {
    return <p className="bg-secondary h-10 p-2 text-center">No results</p>;
  }

  return (
    <>
      {data?.map((el) => (
        <SearchElement
          key={el.id}
          title={el.title}
          thumbnail={el.thumbnail}
          id={el.id}
        />
      ))}
    </>
  );
});

export default SearchResult;

interface SearchElementProps {
  title: string;
  thumbnail: string;
  id: number;
}

let SearchElement: React.FC<SearchElementProps> = memo(
  ({ title, thumbnail, id }) => {
    const { closeSearch } = useSearchContext();

    return (
      <Link
        to={"/product/" + id}
        onClick={closeSearch}
        className="bg-secondary border-primary/10 flex h-10 cursor-pointer border-b-1 select-none last:border-b-0 hover:brightness-80 active:brightness-80"
      >
        <img
          src={thumbnail}
          className="aspect-square h-full object-cover"
        ></img>

        <p className="overflow-hidden p-2 text-ellipsis whitespace-nowrap">
          {title}
        </p>
      </Link>
    );
  },
);
