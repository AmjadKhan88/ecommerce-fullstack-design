import React from "react";

export default function SupplierSection() {
  return (
    <div className="bg-gray-100 px-3 md:px-6 py-8">
      <div
        className=" relative rounded-lg overflow-hidden h-auto flex flex-col md:flex-row  gap-6 p-6 "
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(37,99,235,0.95) 0%,rgba(37,99,235,0.85) 40%,rgba(96,165,250,0.7) 65%,rgba(219,234,254,0.85) 100%), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* LEFT TEXT */}

        <div className="text-white max-w-[500px]">
          <h2 className=" text-[28px] font-semibold leading-snug mb-4 ">
            An easy way to send<br/> requests to all suppliers
          </h2>

          <p
            className=" text-[14px] text-blue-100 leading-relaxed max-w-[330px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        {/* RIGHT FORM */}

        <div
          className=" ml-auto bg-[#F7F9FB] p-6 rounded-lg shadow-md w-[420px] "
        >
          <h3
            className=" font-semibold text-[18px] mb-4 text-gray-800 "
          >
            Send quote to suppliers
          </h3>

          <input
            className=" w-full bg-white border border-gray-200 rounded p-2 mb-3 text-sm outline-none hover:border-blue-500"
            placeholder="What item you need?"
          />

          <textarea
            className=" w-full bg-white border border-gray-200 rounded p-2 mb-3 text-sm h-[80px] outline-none hover:border-blue-500"
            placeholder="Type more details"
          />

          <div className="flex gap-3 mb-4">
            <input
              className=" flex-1 bg-white border border-gray-200 rounded p-2 text-sm outline-none hover:border-blue-500"
              placeholder="Quantity"
            />

            <select
              className=" w-[90px] bg-white border border-gray-200 rounded p-2 text-sm text-gray-500"
            >
              <option>Pcs</option>
            </select>
          </div>

          <button
            className=" bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded text-sm font-medium "
          >
            Send inquiry
          </button>
        </div>
      </div>
    </div>
  );
}
