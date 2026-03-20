import { Mail } from "lucide-react";
import React from "react";

export default function SubscribeNewsLater() {
  return (
    <div className="max-w-[1400px] mx-auto px-3 md:px-6 display flex flex-col items-center justify-center mt-10 pb-10">
      <div className=" text-center flex flex-col items-center justify-center">
        <h1 className="text-xl font-semibold text-gray-900">
          Subscribe to Our Newsletter
        </h1>
        <p className=" text-gray-600 mt-1.5">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className="flex max-w-md w-full gap-2 mt-6">
          <div className="flex items-center gap-2 flex-1 border border-gray-300 px-3 py-2 rounded bg-white">
            <Mail className="text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 outline-none text-sm"
            />
          </div>

          <button className="px-5 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
