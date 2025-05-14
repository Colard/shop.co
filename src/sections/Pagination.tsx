import React from "react";
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowIcon from "../assets/icons/ArrowIcon";
import { tw } from "../utils/tailwindFunctions";
import useTailwindBreakpoint from "../hooks/useTailwindBreakpoint";

interface PaginationProps {
  className: string;
  currentPage: number;
  pageItemsCount: number;
  maxItemsCount: number;
}

type TPaginationFunction = (selectedItem: { selected: number }) => void;

const btnCommonClassName = `rounded-[0.5rem] flex transition-all duration-300 items-center justify-center hover:bg-primary/20 hover:text-primary/100 cursor-pointer font-medium`;

let Pagination: React.FC<PaginationProps> = ({
  className,
  currentPage,
  pageItemsCount,
  maxItemsCount,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLargeScreen = useTailwindBreakpoint("md");

  const handlePageChange: TPaginationFunction = (selectedItem) => {
    if (selectedItem.selected !== currentPage - 1) {
      navigate(`/page/${selectedItem.selected + 1}${location.search}`);
    }
  };

  const pageClassName = tw`text-primary/50 block aspect-square h-full ${btnCommonClassName}`;
  return (
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
      previousClassName="flex-1"
      nextClassName="flex-1 flex justify-end"
      activeClassName="bg-primary/6 text-primary/100"
      onPageChange={handlePageChange}
      pageRangeDisplayed={isLargeScreen ? 2 : 1}
      pageCount={Math.ceil(maxItemsCount / pageItemsCount)}
      marginPagesDisplayed={isLargeScreen ? 3 : 2}
      renderOnZeroPageCount={null}
    />
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
