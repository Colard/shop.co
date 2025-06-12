import { TElement } from ".";

interface NativeSelectProps<T extends number | string> {
  selectedValue: string | number;
  onItemSelect: (value: string) => void;
  elements: TElement<T>[];
}

function NativeSelect<T extends number | string>({
  selectedValue,
  onItemSelect,
  elements,
}: NativeSelectProps<T>) {
  return (
    <select
      className="hidden"
      value={selectedValue}
      onChange={() => {
        onItemSelect(selectedValue.toString());
      }}
    >
      {elements.map(([value, label]) => (
        <option key={value.toString()} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default NativeSelect;
