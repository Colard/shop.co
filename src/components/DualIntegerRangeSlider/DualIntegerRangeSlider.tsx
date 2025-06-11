import { memo, useEffect, useRef, useState, useCallback } from "react";
import {
  calcPinPositions,
  calcPinPositionsFromRealValues,
  calcRealValue,
  setGradient,
} from "../../utils/sliderFunctions";
import { useDualSliderPointerControl } from "../../hooks/useDualSliderPointerControl";
import SliderPin from "./SliderPin";

interface DualIntegerRangeSliderProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  min: number;
  max: number;
  initialMin?: number;
  onPinMouseUp?: (min: number, max: number) => void;
  initialMax?: number;
  visualiziationFunction?: (el: number) => string;
}

const PIN_DIAMETER_PX = 20;

const DualIntegerRangeSlider: React.FC<DualIntegerRangeSliderProps> = ({
  className = "",
  visualiziationFunction,
  onPinMouseUp,
  min = 0,
  max = 100,
  initialMin = min,
  initialMax = max,
  ...rest
}) => {
  const safeMin = Math.min(Math.floor(min), Math.ceil(max));
  const safeMax = Math.max(safeMin, Math.ceil(max === min ? min + 1 : max));

  const [currValues, setCurrValues] = useState<[number, number]>([
    safeMin,
    safeMax,
  ]);
  const [currPinPosition, setCurrPinPosition] = useState<[number, number]>([
    safeMin,
    safeMax,
  ]);

  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = lineRef.current?.getBoundingClientRect().width || 0;
    const newValues: [number, number] = [
      Math.floor(Math.max(safeMin, Math.min(initialMin, safeMax))),
      Math.ceil(Math.max(safeMin, Math.min(initialMax, safeMax))),
    ];

    setCurrValues(newValues);
    setCurrPinPosition(
      calcPinPositionsFromRealValues(
        width,
        PIN_DIAMETER_PX,
        newValues,
        safeMin,
        safeMax,
      ),
    );
  }, [initialMin, initialMax, safeMin, safeMax]);

  const setIsDragging = useDualSliderPointerControl(
    lineRef,
    safeMin,
    safeMax,
    setCurrPinPosition,
    setCurrValues,
    onPinMouseUp,
  );

  const [leftPercent, rightPercent] = calcPinPositions(
    safeMin,
    safeMax,
    currPinPosition[0],
    currPinPosition[1],
  );

  const handlePointerUp = useCallback(() => {
    const lineWidth = lineRef.current?.getBoundingClientRect().width || 0;

    const newValues = calcRealValue(
      lineWidth,
      PIN_DIAMETER_PX,
      currPinPosition,
      safeMin,
      safeMax,
    );
    onPinMouseUp?.(newValues[0], newValues[1]);
  }, [currPinPosition, onPinMouseUp, safeMin, safeMax]);

  return (
    <div
      className={`${className} relative mb-[calc(0.75rem_+_1em)] leading-none`}
      {...rest}
    >
      <div
        ref={lineRef}
        className="h-1.5 w-full"
        style={{
          background: setGradient(
            safeMin,
            safeMax,
            currPinPosition[0],
            currPinPosition[1],
          ),
        }}
      />
      <SliderPin
        percent={leftPercent}
        isLeft
        value={currValues[0]}
        onPointerDown={() => setIsDragging("left")}
        onPointerUp={handlePointerUp}
        visualiziationFunction={visualiziationFunction}
      />
      <SliderPin
        percent={rightPercent}
        isLeft={false}
        value={currValues[1]}
        onPointerDown={() => setIsDragging("right")}
        onPointerUp={handlePointerUp}
        visualiziationFunction={visualiziationFunction}
      />
    </div>
  );
};

export default memo(DualIntegerRangeSlider);
