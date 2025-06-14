import { useEffect, useRef, useState } from "react";

const calculateLinePosition = (
  line: HTMLDivElement | null,
  menu: HTMLDivElement | null,
  activeIndex: number,
) => {
  const button = menu?.querySelector(
    `[data-tab="${activeIndex}"]`,
  ) as HTMLButtonElement;

  if (line && button && menu) {
    line.style.width = `${button.offsetWidth}px`;
    line.style.left = `${(button.offsetLeft / menu.offsetWidth) * 100}%`;
  }
};

interface MenuElement {
  title: string;
  callBack: () => void;
}

interface TabMenuProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  menuElements: MenuElement[];
}

const TabMenu: React.FC<TabMenuProps> = ({
  className = "",
  menuElements,
  ...rest
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lineRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // save active index for observer without rerender
  const activeIndexRef = useRef(activeIndex);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      calculateLinePosition(
        lineRef.current,
        menuRef.current,
        activeIndexRef.current,
      );
    });

    if (menuRef.current) observer.observe(menuRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    calculateLinePosition(lineRef.current, menuRef.current, activeIndex);
  }, [activeIndex]);

  return (
    <div className={`relative ${className}`} {...rest} ref={menuRef}>
      <div className="flex justify-between">
        {menuElements.map((element, i) => (
          <button
            key={i}
            data-tab={`${i}`}
            onClick={() => {
              setActiveIndex(i);
              element.callBack();
            }}
            className={`relative pb-3 text-center text-lg leading-[1.375rem] transition sm:flex-1 md:pb-4 ${
              i === activeIndex ? "text-primary" : "text-primary/60"
            }`}
          >
            {element.title}
          </button>
        ))}
      </div>
      <div className="bg-primary/60 relative h-0.5">
        <div
          ref={lineRef}
          className="bg-primary absolute bottom-0 h-0.5 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default TabMenu;
