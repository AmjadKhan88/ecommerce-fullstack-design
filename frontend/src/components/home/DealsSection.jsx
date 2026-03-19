import React from "react";
import { deals_section_products } from "../../assets/assets";

export default function DealsSection() {


  return (
    <div className="bg-gray-100 p-6">
      <div className="bg-white shadow-sm  rounded-lg overflow-hidden border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr_1fr_1fr_1fr_1fr]">
          {/* LEFT */}

          <div className="p-6 border-b md:border-b-0 md:border-r border-gray-300">
            <h2 className="text-lg font-semibold">Deals and offers</h2>

            <p className="text-gray-500 text-sm mb-5">Hygiene equipments</p>

            {/* TIMER */}

            <div className="flex gap-2">
              <div className="bg-gray-600 text-white w-14 h-14 rounded flex flex-col justify-center items-center">
                <span className="font-semibold">04</span>
                <span className="text-xs">Days</span>
              </div>

              <div className="bg-gray-600 text-white w-14 h-14 rounded flex flex-col justify-center items-center">
                <span className="font-semibold">13</span>
                <span className="text-xs">Hour</span>
              </div>

              <div className="bg-gray-600 text-white w-14 h-14 rounded flex flex-col justify-center items-center">
                <span className="font-semibold">34</span>
                <span className="text-xs">Min</span>
              </div>

              <div className="bg-gray-600 text-white w-14 h-14 rounded flex flex-col justify-center items-center">
                <span className="font-semibold">56</span>
                <span className="text-xs">Sec</span>
              </div>
            </div>
          </div>

          {/* PRODUCTS */}

          {deals_section_products.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 border-t md:border-t-0 md:border-r last:border-r-0 border-gray-300"
            >
              <img src={item.img} className="h-[120px] object-contain mb-4" />

              <p className="text-sm mb-3 font-semibold text-gray-700">{item.name}</p>

              <div className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full">
                {item.discount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
