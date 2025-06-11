import React, { JSX, useEffect, useRef, useState } from "react";
import DropdownList from "./DropdownList";
import NativeSelect from "./NativeSelect";

export type TElement<T extends number | string> = [T, string];

interface TextSelectProps<T extends number | string>
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  elements: TElement<T>[];
  onItemSelect: (value: string) => void;
  maxShowedElements?: number;
  selectClassName?: string;
  optionWidth?: number;
  initialValue?: TElement<T> | null;
}

function TextSelect<T extends number | string>({
  className = "",
  elements,
  initialValue = null,
  onItemSelect,
  optionWidth = 200,
  maxShowedElements,
  ...rest
}: TextSelectProps<T>): JSX.Element {
  const [selected, setSelected] = useState<TElement<T>>(
    initialValue || elements[0],
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => setSelected(initialValue || elements[0]), [initialValue]);

  const toggleSelectVisibility = () => {
    if (!isVisible) setIsVisible(true);
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const wrapper = wrapperRef.current;
    const element = event.target as Node;

    if (wrapper && !wrapper.contains(element)) setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const onListClick = (e: React.MouseEvent) => {
    if (!(e.target instanceof HTMLLabelElement)) return;

    const value = e.target.dataset.value;

    if (!value) return;

    setSelected(elements.find(([v]) => v === value) || elements[0]);
    onItemSelect(value);
    toggleSelectVisibility();
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative inline-block cursor-pointer ${className}`}
      {...rest}
    >
      <NativeSelect
        selectedValue={selected[0]}
        onItemSelect={onItemSelect}
        elements={elements}
      />

      <div onClick={toggleSelectVisibility}>{selected[1]}</div>

      <DropdownList
        onClickOutside={handleClickOutside}
        maxShowedElements={maxShowedElements}
        elements={elements}
        isVisible={isVisible}
        isOpen={isOpen}
        wrapperRef={wrapperRef}
        optionWidth={optionWidth}
        onListClick={onListClick}
      />
    </div>
  );
}

export default TextSelect;
