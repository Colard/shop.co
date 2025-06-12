import { useEffect, useRef, useState } from "react";

const tabs = ["Елемент 1", "Елемент 2", "Елемент 3"];

export default function TabMenu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const lineRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    const menu = menuRef.current;
    const button = document.getElementById(`tab-${activeIndex}`);
    if (line && button && menu) {
      line.style.width = `${button.offsetWidth}px`;
      line.style.left = `${(button.offsetLeft / menu.offsetWidth) * 100}%`;
    }
  }, [activeIndex]);

  return (
    <div className="relative bg-gray-300" ref={menuRef}>
      <div className="flex justify-between">
        {tabs.map((label, i) => (
          <button
            key={i}
            id={`tab-${i}`}
            onClick={() => setActiveIndex(i)}
            className={`relative py-2 text-center transition md:flex-1 ${
              i === activeIndex ? "text-black" : "text-gray-500"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        ref={lineRef}
        className="absolute bottom-0 h-1 bg-black transition-all duration-300"
      />
    </div>
  );
}
