import React from "react";

const isBreakpointMatch = (breakpointVar: string) => {
  const remValue = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(breakpointVar),
  );

  const rootFontSize = parseInt(
    getComputedStyle(document.documentElement).fontSize,
  );

  const pxValue = remValue * rootFontSize;

  const isBreakpoint = window.innerWidth >= pxValue;

  return isBreakpoint;
};

const useTailwindBreakpoint = (breakpointVar: string) => {
  const [isBreakpoint, setIsBreakpoint] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsBreakpoint(isBreakpointMatch(breakpointVar));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return isBreakpoint;
};

export default useTailwindBreakpoint;
