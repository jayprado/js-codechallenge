import countries from "i18n-iso-countries";
import Select from "react-select";

import { CountrySelectOption, CountryValue } from "./CountrySelectOption";
import { DEFAULT_COUNTRY } from "../../constants";

// Register countries
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

// --- TASK G --- ✅
// Please replace "any" with a proper type in this file (and where it is needed).

// Props
export interface CountrySelectProps {
  value?: CountryValue;
  onChange?: (value: CountryValue) => void;
}

// Component
export const CountrySelect = ({
  value = DEFAULT_COUNTRY,
  onChange,
}: CountrySelectProps) => {
  // Prepare Data
  const data = Object.entries(
    countries.getNames("en", { select: "official" })
  ).map(([code, name]) => {
    return {
      value: { code, name },
      label: name,
    };
  });
  const defaultValue = { value: value, label: value.name };

  // Render
  return (
    <div>
      <label>
        Country
        <Select
          isMulti={false}
          options={data}
          components={{ Option: CountrySelectOption }}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            if (newValue) onChange?.(newValue.value);
          }}
        />
      </label>
    </div>
  );
};

export type { CountryValue } from "./CountrySelectOption";
export default CountrySelect;
