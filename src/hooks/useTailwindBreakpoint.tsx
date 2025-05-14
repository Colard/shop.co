import React from "react";

/*
  Tailwind generate css by files contetnt.
  So, this constant force TW to generate all basic breakpoints
*/
const GENERATING_CSS_VARIABLES = [
  "--breakpoint-sm",
  "--breakpoint-md",
  "--breakpoint-lg",
  "--breakpoint-xl",
  "--breakpoint-2xl",
];

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
      setIsBreakpoint(isBreakpointMatch("--breakpoint-" + breakpointVar));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return isBreakpoint;
};

export default useTailwindBreakpoint;
