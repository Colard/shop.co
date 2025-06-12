import { useEffect } from "react";
import { tw } from "../../utils/tailwindFunctions";
import { TElement } from ".";
import useDropdownAlignment from "./useDropdownAlignment";

interface DropdownListProps<T extends number | string> {
  maxShowedElements?: number;
  elements: TElement<T>[];
  isVisible: boolean;
  isOpen: boolean;
  optionWidth: number;
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  onListClick: (e: React.MouseEvent) => void;
  onClickOutside: (e: MouseEvent) => void;
}

function DropdownList<T extends number | string>({
  maxShowedElements,
  elements,
  isVisible,
  wrapperRef,
  isOpen,
  optionWidth,
  onListClick,
  onClickOutside,
}: DropdownListProps<T>) {
  const alignRight = useDropdownAlignment(wrapperRef, optionWidth);

  const selectOptionClassName = tw`hover:bg-primary/10 active:bg-primary/10 flex h-10 shrink-0 cursor-pointer items-center truncate px-2 hover:font-bold active:font-bold`;

  const listClassName = tw`bg-bg-color absolute top-full z-20 flex flex-col overflow-y-auto shadow-2xl transition-all duration-300 ease-out`;
  const openListClassName = isOpen
    ? " pointer-events-auto translate-y-0 opacity-100"
    : " pointer-events-none translate-y-5 opacity-0";
  const fullListClassName = `${listClassName} ${openListClassName} ${alignRight ? "right-0" : "left-0"} ${isVisible ? "visible" : "invisible"}`;

  useEffect(() => {
    window.addEventListener("mousedown", onClickOutside);
    return () => window.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div
      onClick={onListClick}
      style={{
        maxHeight: `calc(${maxShowedElements || elements.length} * 2.5rem)`,
      }}
      className={fullListClassName}
    >
      {elements.map(([value, label]) => (
        <label
          key={value.toString()}
          data-value={value.toString()}
          className={`${selectOptionClassName}`}
          style={{ width: `${optionWidth}px` }}
        >
          {label}
        </label>
      ))}
    </div>
  );
}

export default DropdownList;
