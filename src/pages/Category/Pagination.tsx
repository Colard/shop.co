import React from "react";
import ReactPaginate from "react-paginate";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { tw } from "../../utils/tailwindFunctions";
import useTailwindBreakpoint from "../../hooks/useTailwindBreakpoint";

type TPaginationFunction = (selectedItem: { selected: number }) => void;
interface PaginationProps {
  className: string;
  currentPage: number;
  pageItemsCount: number;
  handlePageChange: TPaginationFunction;
  maxItemsCount: number;
}

const btnCommonClassName = `rounded-[0.5rem] flex transition-all duration-300 items-center justify-center active:bg-primary/20 active:text-primary/100 hover:bg-primary/20 hover:text-primary/100 cursor-pointer font-medium`;

let Pagination: React.FC<PaginationProps> = ({
  className,
  currentPage,
  pageItemsCount,
  handlePageChange,
  maxItemsCount,
}) => {
  const isLargeScreen = useTailwindBreakpoint("md");

  const pageClassName = tw`text-primary/50 relative block aspect-square h-full ${btnCommonClassName}`;
  return (
    <nav>
      <ReactPaginate
        containerClassName={`flex justify-center text-sm font-bold h-pagination items-center  ${className} `}
        nextLabel={
          <MoveButtons type="next" isLargeScreen={isLargeScreen}></MoveButtons>
        }
        previousLabel={
          <MoveButtons type="prev" isLargeScreen={isLargeScreen}></MoveButtons>
        }
        forcePage={currentPage - 1}
        pageClassName={pageClassName}
        breakClassName={pageClassName}
        pageLinkClassName="absolute inset-0 transform flex items-center justify-center"
        previousClassName="flex-1"
        nextClassName="flex-1 flex justify-end"
        activeClassName="bg-primary/6 text-primary/100"
        onPageChange={handlePageChange}
        pageRangeDisplayed={isLargeScreen ? 2 : 1}
        pageCount={Math.ceil(maxItemsCount / pageItemsCount)}
        marginPagesDisplayed={isLargeScreen ? 3 : 2}
        renderOnZeroPageCount={null}
      />
    </nav>
  );
};

interface MoveButtonsProps {
  type: "next" | "prev";
  isLargeScreen?: boolean;
}

let MoveButtons: React.FC<MoveButtonsProps> = ({ type, isLargeScreen }) => {
  return (
    <div
      className={`border-primary/10 h-9 w-fit border-1 px-2 md:px-3 ${btnCommonClassName}`}
    >
      {type === "prev" ? (
        <div className="flex items-center">
          <ArrowIcon className={`size-4 ${isLargeScreen ? "mr-2" : "mr-0"}`} />
          {isLargeScreen && "Previous"}
        </div>
      ) : (
        <div className="flex items-center">
          {isLargeScreen && "Next"}
          <ArrowIcon
            className={`size-4 scale-x-[-1] ${isLargeScreen ? "ml-2" : "ml-0"}`}
          />
        </div>
      )}
    </div>
  );
};

export default React.memo(Pagination);
