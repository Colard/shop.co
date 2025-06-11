import React from "react";

interface AccountIconPatternProps
  extends Omit<React.ComponentPropsWithoutRef<"svg">, "children"> {
  iconPathData: string | string[];
}

const MediaIconPattern: React.FC<AccountIconPatternProps> = ({
  className,
  iconPathData,
  ...rest
}) => {
  return (
    <svg
      className={`group/icon **:transition **:duration-300 ${className}`}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle
        cx="14"
        cy="14"
        r="14"
        className="fill-[var(--color-bg-color)] group-hover/icon:fill-[var(--color-primary)] group-active/icon:fill-[var(--color-primary)]"
      />
      <circle
        cx="14"
        cy="14"
        r="13.5"
        className="stroke-[var(--color-primary)]/20"
      />
      {typeof iconPathData === "string" ? (
        <path
          d={iconPathData}
          className={`fill-[var(--color-primary)] group-hover/icon:fill-[var(--color-bg-color)] group-active/icon:fill-[var(--color-bg-color)]`}
        />
      ) : (
        iconPathData.map((pathData, index) => (
          <path
            key={index}
            d={pathData}
            className={`fill-[var(--color-primary)] group-hover/icon:fill-[var(--color-bg-color)] group-active/icon:fill-[var(--color-bg-color)]`}
          />
        ))
      )}
    </svg>
  );
};

export default MediaIconPattern;
