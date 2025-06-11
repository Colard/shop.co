export function findPercentage(min: number, max: number, value: number) {
  if (max === min) return 50;
  const clampedValue = Math.min(Math.max(value, min), max);
  return ((clampedValue - min) / (max - min)) * 100;
}

export function setGradient(
  min: number,
  max: number,
  currentMin: number,
  currentMax: number,
) {
  const minPct = findPercentage(min, max, currentMin);
  const maxPct = findPercentage(min, max, currentMax);

  return `linear-gradient(
    to right,
    var(--color-secondary) 0%,
    var(--color-secondary) ${minPct}%,
    var(--color-primary) ${minPct}%,
    var(--color-primary) ${maxPct}%,
    var(--color-secondary) ${maxPct}%,
    var(--color-secondary) 100%
  )`;
}

export function calcPinPositions(
  min: number,
  max: number,
  currentMin: number,
  currentMax: number,
): [number, number] {
  return [
    findPercentage(min, max, currentMin),
    findPercentage(min, max, currentMax),
  ];
}

export function calcRealValue(
  lineWidth: number,
  pinDiameter: number,
  value: [number, number],
  min: number,
  max: number,
): [number, number] {
  const visRange = max - min;
  const scaleFactor = 1 / (1 - pinDiameter / lineWidth);

  const left = min + (value[0] - min) * scaleFactor;
  const right =
    min + (value[1] - min - visRange * (pinDiameter / lineWidth)) * scaleFactor;

  return [Math.round(left), Math.round(right)];
}

export function calcPinPositionsFromRealValues(
  lineWidth: number,
  pinDiameter: number,
  realValue: [number, number],
  min: number,
  max: number,
): [number, number] {
  const pinRatio = pinDiameter / lineWidth;
  const visualRange = max - min;
  const scaleFactor = 1 / (1 - pinRatio);

  const leftPin = min + (realValue[0] - min) / scaleFactor;
  const rightPin =
    min + (realValue[1] - min) / scaleFactor + visualRange * pinRatio;

  return [leftPin, rightPin];
}
