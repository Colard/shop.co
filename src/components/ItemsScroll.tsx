import React from "react";

interface ItemsScrollProps<T>
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  elements: T[];
  renderFunction: (item: T) => React.ReactNode;
  extractKey?: (item: T) => string | number;
}

function ItemsScroll<T>({
  className = "",
  elements,
  renderFunction,
  extractKey,
  ...rest
}: ItemsScrollProps<T>) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const isDown = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeft = React.useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };

  const onMouseLeave = () => {
    isDown.current = false;
  };

  const onMouseUp = () => {
    isDown.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);

    //scroll speed
    const walk = (x - startX.current) * 1;

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className={`no-scrollbar flex w-full cursor-grab gap-5 overflow-x-auto ${className}`}
      {...rest}
    >
      {elements.map((item, index) => (
        <div key={extractKey ? extractKey(item) : index}>
          {renderFunction(item)}
        </div>
      ))}
    </div>
  );
}

export default ItemsScroll;
