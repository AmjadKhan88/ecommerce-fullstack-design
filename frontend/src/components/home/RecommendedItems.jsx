import React from "react";
import { recommended_items_products } from "../../assets/assets";



export default function RecommendedItems() {
  return (
    <div className="max-w-[1400px] mx-auto my-10 px-3 md:px-6">

      <h2 className="text-[22px] font-semibold mb-6">
        Recommended items
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

        {recommended_items_products.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
          >

            <div className="h-[160px] flex items-center justify-center bg-gray-50 rounded">

              <img
                src={item.img}
                className="max-h-[140px] object-contain"
              />

            </div>

            <h3 className="font-semibold text-[16px] mt-3">
              {item.price}
            </h3>

            <p className="text-gray-500 text-[14px] mt-1 leading-5">
              {item.title}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}
