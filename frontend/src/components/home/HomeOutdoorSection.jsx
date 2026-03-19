import React from "react";
import { assets, home_outdoor_products } from "../../assets/assets";

export default function HomeOutdoor() {
  

  return (
    <div className="bg-gray-100 px-3 md:px-6 pt-2">
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div
          className=" grid  grid-cols-2  md:grid-cols-[260px_repeat(4,1fr)] "
        >
          {/* LEFT BANNER */}

          <div
            className=" col-span-2 md:col-span-1 md:row-span-2 relative p-6 min-h-[260px] " 
           style={{ backgroundImage: `url(${assets.outdoor_baner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2 className="text-xl font-semibold mb-5">Home and <br/>outdoor</h2>

            <button
              className=" bg-white  px-5  py-2  rounded  shadow-sm  text-sm "
            >
              Source now
            </button>

            
          </div>

          {/* PRODUCTS */}

          {home_outdoor_products.map((item, index) => (
            <div
              key={index}
              className=" h-[130px] shadow-sm p-4 flex justify-between items-center "
            >
              <div>
                <p className="text-sm font-medium">{item.title}</p>

                <p className="text-xs text-gray-400 mt-2">From</p>

                <p className="text-xs text-gray-500">{item.price}</p>
              </div>

              <img
                src={item.img}
                className="h-[75px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
