import { useRef, useState } from "react";
import PromoCodeIcon from "../../assets/icons/PromoCodeIcon";
import Button from "../../components/Button";

interface PromoCodeFormProps {
  className?: string;
}

const PromoCodeForm: React.FC<PromoCodeFormProps> = ({ className }) => {
  const [isPromoInvalid, setIsPromoInvalid] = useState<boolean>(false);
  const invalidTimerResetRef = useRef<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsPromoInvalid(true);

    if (invalidTimerResetRef.current) {
      clearTimeout(invalidTimerResetRef.current);
    }

    invalidTimerResetRef.current = setTimeout(
      () => setIsPromoInvalid(false),
      2000,
    );
  };

  return (
    <form
      className={`flex-col" flex flex-1 ${className}`}
      onSubmit={onFormSubmit}
    >
      <div className="flex flex-1">
        <div
          className="bg-secondary flex h-12 flex-1 items-center rounded-full px-4 py-3"
          onClick={() => inputRef.current?.focus()}
        >
          <label className="flex h-full gap-3">
            <PromoCodeIcon className="text-primary/40 aspect-square h-full" />
            <input
              ref={inputRef}
              className="placeholder:text-primary/40 w-full focus:outline-none"
              placeholder="Add promo code"
            ></input>
          </label>
        </div>

        <Button
          className={`text-bg-color ml-3 h-full w-30 md:w-35 ${isPromoInvalid ? "bg-red" : "bg-primary"}`}
        >
          {isPromoInvalid ? "Invalid!" : "Apply"}
        </Button>
      </div>
    </form>
  );
};

export default PromoCodeForm;
