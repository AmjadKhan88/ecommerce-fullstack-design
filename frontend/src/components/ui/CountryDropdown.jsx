import { useState } from "react";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";

const countries = [
  {
    value: "US",
    label: "United States",
    code: "US",
  },

  {
    value: "DE",
    label: "Germany",
    code: "DE",
  },

  {
    value: "PK",
    label: "Pakistan",
    code: "PK",
  },

  {
    value: "GB",
    label: "United Kingdom",
    code: "GB",
  },

  {
    value: "FR",
    label: "France",
    code: "FR",
  },
];

export default function CountryDropdown() {
  const [country, setCountry] = useState(countries[0]);

  const formatOptionLabel = (country) => (
    <div className="flex items-center gap-2">
      <ReactCountryFlag
        countryCode={country.code}
        svg
        style={{
          width: "20px",
          height: "20px",
        }}
      />

      <span>{country.label}</span>
    </div>
  );

  return (
    <div className="w-[180px]">
      <Select
        value={country}
        onChange={setCountry}
        options={countries}
        formatOptionLabel={formatOptionLabel}
        isSearchable={false}
        className="text-sm"
      />
    </div>
  );
}
