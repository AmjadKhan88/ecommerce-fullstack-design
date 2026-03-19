import { assets } from "../../assets/assets";

export default function HomeBanner() {
  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];

  return (
    <div className="bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-sm p-4">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* LEFT SIDEBAR */}

          <div className="hidden  md:block md:col-span-3">
            <ul className="space-y-2">

              {categories.map((item, index) => (
                <li
                  key={index}
                  className={`p-2 rounded cursor-pointer text-sm
                  ${
                    index === 0
                      ? "bg-blue-100 font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item}
                </li>
              ))}

            </ul>
          </div>

          {/* CENTER HERO */}

          <div className="col-span-1 md:col-span-6">
            <div className={`bg-[#9FD3C7] md:bg-[url(${assets.robot_orking})] rounded-lg h-[260px] flex items-center justify-between p-10 `}>

              <div>

                <p className="text-xl text-gray-800">
                  Latest trending
                </p>

                <h1 className="text-3xl font-bold mb-6">
                  Electronic items
                </h1>

                <button className="bg-white px-5 py-2 rounded shadow text-sm hover:bg-gray-50">
                  Learn more
                </button>

              </div>

              <div>
                <img
                  src={assets.robot_orking}
                  className="hidden md:block h-[250px] object-contain"
                />
              </div>

            </div>
          </div>

          {/* RIGHT SIDEBAR */}

          <div className="col-span-1 md:col-span-3 space-y-3">

            {/* USER CARD */}

            <div className="bg-blue-50 p-4 rounded-lg">

              <div className="flex items-center gap-3 mb-3">

                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

                <div className="text-sm">
                  <p className="font-semibold">
                    Hi, user
                  </p>

                  <p className="text-gray-500">
                    let's get stated
                  </p>
                </div>

              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded mb-2 text-sm">
                Join now
              </button>

              <button className="w-full bg-gray-200 py-2 rounded text-sm">
                Log in
              </button>

            </div>

            {/* PROMO */}

            <div className="bg-orange-400 text-white p-4 rounded-lg text-sm font-medium">
              Get US $10 off
              <br />
              with a new
              <br />
              supplier
            </div>

            <div className="bg-teal-400 text-white p-4 rounded-lg text-sm font-medium">
              Send quotes with
              <br />
              supplier
              <br />
              preferences
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
