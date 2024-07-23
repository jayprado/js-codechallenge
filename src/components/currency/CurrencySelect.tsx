import CurrencyData from "currency-codes/data";
import Select from "react-select";

import { DEFAULT_CURRENCY } from "../../constants";

// Props
export interface CurrencySelectProps {
  value?: string;
  onChange?: (currency: string) => void;
}

// Component
const CurrencySelect = ({
  value = DEFAULT_CURRENCY,
  onChange,
}: CurrencySelectProps) => {
  // Prepare data
  const data = CurrencyData.map(({ code, currency }) => {
    return {
      value: code + " - " + currency,
      label: code + " - " + currency,
    };
  });
  const defaultValue = { value: value, label: value };

  // Render
  return (
    <div>
      <label>
        Currency
        <Select
          isMulti={false}
          options={data}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            if (newValue) onChange?.(newValue.value);
          }}
        />
      </label>
    </div>
  );
};

export default CurrencySelect;
