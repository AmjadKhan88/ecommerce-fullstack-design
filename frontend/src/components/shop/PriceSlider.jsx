import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import { useState } from "react";

export default function PriceSlider() {
  const [price, setPrice] = useState([0, 2000]);
  const handleChange = (value) => {
    setPrice(value);
  };

  return (
    <div>
      <h3 className="font-semibold mb-4">Price Range</h3>

      <Slider
        range
        min={0}
        max={2000}
        value={[price[0], price[1]]}
        onChange={handleChange}
      />

      <div className="flex justify-between mt-2 text-sm">
        <span>${price[0]}</span>

        <span>${price[1]}</span>
      </div>
      <button className="shadow-sm w-full mt-2 bg-white text-blue-600 rounded p-2 hover:bg-gray-100">
        Apply
      </button>
    </div>
  );
}
