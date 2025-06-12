import React, { useCallback } from "react";
import { tw } from "../utils/tailwindFunctions";
import CloseIcon from "../assets/icons/CloseIcon";
import { useNavigate, useSearchParams } from "react-router-dom";
import useCategoriesApi from "../api/useCategoriesApi";
import DualIntegerRangeSlider from "../components/DualIntegerRangeSlider";
import useFilteredData from "../contexts/FilteredDataContext";
import Button from "../components/Button";

interface FiltersProps
  extends Omit<React.ComponentPropsWithoutRef<"aside">, "children"> {
  closing?: () => void;
}

let Filters: React.FC<FiltersProps> = ({
  className = "",
  closing,
  ...rest
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = useCategoriesApi();
  const { response, filters } = useFilteredData();
  const navigator = useNavigate();

  const minPrice = response?.minPrice || 0;
  const maxPrice = response?.maxPrice || 0;

  const setCategory = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    if (!target.dataset.value) return;
    if (searchParams.get("category") === target.dataset.value) return;
    const sort = searchParams.get("sort");

    const newParams = new URLSearchParams();
    newParams.set("category", target.dataset.value);

    if (sort !== null) {
      newParams.set("sort", sort);
    } else {
      newParams.delete("sort");
    }

    setSearchParams(newParams);
  };

  const visualisateSliderText = useCallback((el: number) => `$${el}`, []);

  const setPriceRange = useCallback(
    (min: number, max: number) => {
      const currentMin = searchParams.get("minPrice");
      const currentMax = searchParams.get("maxPrice");

      if (currentMin === min.toString() && currentMax === max.toString()) {
        return;
      }

      const newParams = new URLSearchParams(searchParams);

      newParams.set("minPrice", Math.min(min, Math.ceil(maxPrice)).toString());
      newParams.set("maxPrice", Math.max(max, Math.floor(minPrice)).toString());

      setSearchParams(newParams);
    },
    [searchParams, setSearchParams],
  );

  const setRatingRange = useCallback(
    (min: number, max: number) => {
      const currentMin = searchParams.get("minRating");
      const currentMax = searchParams.get("maxRating");

      if (currentMin === min.toString() && currentMax === max.toString()) {
        return;
      }

      const newParams = new URLSearchParams(searchParams);

      newParams.set("minRating", min.toString());
      newParams.set("maxRating", max.toString());

      setSearchParams(newParams);
    },
    [searchParams, setSearchParams],
  );

  const clearFilters = () => {
    navigator("/page/1");
  };

  const settingBlockClassName = tw`border-primary/10 border-b`;
  const headerRowClassName = tw`flex justify-between py-5`;
  const headerNameClassName = tw`text-5 font-bold`;
  return (
    <aside
      className={`${className} overflow-x-clip overflow-y-auto px-5 pb-6 lg:px-6 lg:pb-7`}
      {...rest}
    >
      <div className={`${settingBlockClassName} ${headerRowClassName}`}>
        <h2 className={headerNameClassName}>Filters</h2>
        <CloseIcon
          className="text-primary/40 size-4 cursor-pointer sm:hidden"
          onClick={closing}
        />
      </div>

      <div className={`${settingBlockClassName}`}>
        <div className={`${headerRowClassName}`}>
          <h3 className={headerNameClassName}>Categories</h3>
        </div>

        <div className="base-text flex flex-wrap gap-2 pb-5 text-[0.875rem]">
          {categories?.map((category) => (
            <CategoryButton
              key={category.slug}
              name={category.name}
              value={category.slug}
              onClick={setCategory}
              isActive={searchParams.get("category") === category.slug}
            />
          ))}
        </div>
      </div>

      <div className={`${settingBlockClassName}`}>
        <div className={`${headerRowClassName}`}>
          <h3 className={headerNameClassName}>Price</h3>
        </div>

        <div className="base-text flex flex-wrap gap-2 text-[0.875rem]">
          <DualIntegerRangeSlider
            min={minPrice}
            max={maxPrice}
            initialMax={filters.maxPrice}
            initialMin={filters.minPrice}
            className="w-full"
            visualiziationFunction={visualisateSliderText}
            onPinMouseUp={setPriceRange}
          />
        </div>
      </div>

      <div className={`${settingBlockClassName}`}>
        <div className={`${headerRowClassName}`}>
          <h3 className={headerNameClassName}>Rating</h3>
        </div>

        <div className="base-text flex flex-wrap gap-2 text-[0.875rem]">
          <DualIntegerRangeSlider
            min={0}
            max={5}
            initialMax={filters.maxRating}
            initialMin={filters.minRating}
            className="w-full"
            onPinMouseUp={setRatingRange}
          />
        </div>
      </div>

      <Button
        className="bg-primary text-secondary mt-5 w-full p-2"
        onClick={clearFilters}
      >
        Clear Filters
      </Button>
    </aside>
  );
};

interface CategoryButtonProps {
  name: string;
  value: string;
  isActive: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

let CategoryButton: React.FC<CategoryButtonProps> = ({
  name,
  value,
  isActive,
  onClick,
}) => {
  const buttonClassName = tw`hover:text-bg-color hover:bg-primary active:text-bg-color active:bg-primary cursor-pointer rounded-full px-5 py-2 transition-colors duration-200 select-none`;
  const activeButtonClassName = tw`text-bg-color ${isActive ? "bg-primary" : "bg-secondary"}`;

  const className = isActive
    ? `${buttonClassName} ${activeButtonClassName}`
    : buttonClassName;
  return (
    <p onClick={onClick} className={className} data-value={value}>
      {name}
    </p>
  );
};

export default React.memo(Filters);
