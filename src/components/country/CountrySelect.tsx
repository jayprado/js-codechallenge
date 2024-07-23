import countries from "i18n-iso-countries";
import Select, { SingleValueProps } from "react-select";

import {
  CountrySelectOption,
  CountryValue,
  CountryOption,
} from "./CountrySelectOption";
import { DEFAULT_COUNTRY } from "../../constants";

import "./CountrySelect.css";

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
  const defaultValue: CountryOption = { value: value, label: value.name };

  // Render
  return (
    <div>
      <label>
        Country
        <Select
          isMulti={false}
          options={data}
          components={{
            Option: CountrySelectOption,
            SingleValue: CountrySelectSingleValue,
          }}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            if (newValue) onChange?.(newValue.value);
          }}
        />
      </label>
    </div>
  );
};

const CountrySelectSingleValue = (props: SingleValueProps<CountryOption>) => {
  const { data } = props;
  const style = props.getStyles("singleValue", props);
  return (
    <div
      className="countrySelectSingleValue"
      onClick={props.selectProps.onMenuOpen}
      style={style as React.CSSProperties}
    >
      <img
        alt={data.value.code}
        src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${data.value.code}.svg`}
        className="countryFlag"
      />
      <span>{data.label}</span>
    </div>
  );
};

export type { CountryValue } from "./CountrySelectOption";
export default CountrySelect;
