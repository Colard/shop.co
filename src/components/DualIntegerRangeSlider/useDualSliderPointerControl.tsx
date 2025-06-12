import { useEffect, useRef, useState } from "react";
import { calcRealValue } from "../../utils/sliderFunctions"; // переконайся, що шлях правильний

const PIN_DIAMETER_PX = 20;

export function useDualSliderPointerControl(
  lineRef: React.RefObject<HTMLElement | null>,
  safeMin: number,
  safeMax: number,
  setCurrPinPosition: React.Dispatch<React.SetStateAction<[number, number]>>,
  setCurrValues: React.Dispatch<React.SetStateAction<[number, number]>>,
  onEndDragging?: (min: number, max: number) => void,
) {
  const [isDragging, setIsDragging] = useState<"left" | "right" | null>(null);

  const setCurrPinPositionRef = useRef(setCurrPinPosition);
  const setCurrValuesRef = useRef(setCurrValues);
  const valuesRef = useRef<null | [number, number]>(null);

  useEffect(() => {
    setCurrPinPositionRef.current = setCurrPinPosition;
  }, [setCurrPinPosition]);

  useEffect(() => {
    setCurrValuesRef.current = setCurrValues;
  }, [setCurrValues]);

  useEffect(() => {
    if (!isDragging) return;

    function handlePointerMove(e: PointerEvent) {
      if (!lineRef.current) return;

      const rect = lineRef.current.getBoundingClientRect();
      let percent = ((e.clientX - rect.left) / rect.width) * 100;
      percent = Math.min(100, Math.max(0, percent));

      const value = Math.round(safeMin + ((safeMax - safeMin) * percent) / 100);

      setCurrPinPositionRef.current(([left, right]) => {
        const minDistanceValue = Math.round(
          (PIN_DIAMETER_PX / rect.width) * (safeMax - safeMin),
        );

        let newLeft = left;
        let newRight = right;

        if (isDragging === "left") {
          newLeft = Math.min(value, right - minDistanceValue);
          newLeft = Math.max(safeMin, newLeft);
        } else if (isDragging === "right") {
          newRight = Math.max(value, left + minDistanceValue);
          newRight = Math.min(safeMax, newRight);
        }

        const next = [newLeft, newRight] as [number, number];

        const lineWidth = rect.width;
        const realValues = calcRealValue(
          lineWidth,
          PIN_DIAMETER_PX,
          next,
          safeMin,
          safeMax,
        );

        setCurrValuesRef.current(realValues);
        valuesRef.current = realValues;
        return next;
      });
    }

    document.body.style.userSelect = "none";

    function handlePointerUp() {
      setIsDragging(null);
      document.body.style.userSelect = "";

      setTimeout(() => {
        if (!valuesRef.current) return;
        onEndDragging?.(valuesRef.current[0], valuesRef.current[1]);
      }, 0);
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [isDragging, safeMin, safeMax, lineRef]);

  return setIsDragging;
}
