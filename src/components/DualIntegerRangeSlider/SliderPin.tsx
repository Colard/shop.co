import React from "react";
import { tw } from "../../utils/tailwindFunctions";

interface SliderPinProps {
  percent: number;
  isLeft: boolean;
  value: number;
  onPointerDown: () => void;
  onPointerUp: () => void;
  visualiziationFunction?: (el: number) => string;
}

const pinClassName = tw`bg-primary absolute top-1/2 z-100 size-5 -translate-x-2.5 -translate-y-1/2 transform cursor-pointer rounded-full`;
const pinTextClassName = tw`absolute top-full left-1/2 mt-1 -translate-x-1/2`;

const SliderPin: React.FC<SliderPinProps> = ({
  percent,
  value,
  onPointerDown,
  onPointerUp,
  visualiziationFunction,
}) => (
  <div
    className={pinClassName}
    style={{ left: `${percent}%` }}
    onPointerDown={onPointerDown}
    onPointerUp={onPointerUp}
  >
    <div className={pinTextClassName}>
      {visualiziationFunction ? visualiziationFunction(value) : value}
    </div>
  </div>
);

export default React.memo(SliderPin);
