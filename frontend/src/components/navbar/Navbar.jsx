import { useState } from "react";

import {
  Search,
  User,
  Heart,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  MessageCircleMore,
} from "lucide-react";
import CountryDropdown from "../ui/CountryDropdown";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="w-full border-b bg-white border-gray-300">
      {/* TOP NAVBAR */}

      <div className="flex items-center justify-between px-4 md:px-10 py-4 gap-4">
        {/* Logo */}

        <div className="flex items-center gap-2 text-blue-600 font-bold text-lg md:text-xl">
          <div className="bg-blue-600 text-white p-2 rounded">🛍</div>
          Brand
        </div>

        {/* Search (hidden mobile) */}

        <div className="hidden md:flex flex-1 max-w-2xl border-2 border-blue-500 rounded overflow-hidden">
          <input
            className="flex-1 px-4 py-2 outline-none"
            placeholder="Search products"
          />

          <select className="border-l-2 px-3 text-gray-600 border-gray-300 bg-white outline-none">
            <option>All category</option>
          </select>

          <button className="bg-blue-500 text-white px-6 flex items-center gap-1">
            <Search size={18} />
            Search
          </button>
        </div>

        {/* Right Icons */}

        <div className="flex items-center gap-5 text-gray-600">
          {/* Desktop icons */}

          <div className="hidden md:flex gap-7">
            <div className="text-center flex flex-col items-center justify-center cursor-pointer hover:text-blue-600">
              <User className="text-slate-500" fill="currentColor" size={24} />

              <p className="text-xs text-slate-500 mt-1">Profile</p>
            </div>

            <div className="text-center flex flex-col items-center justify-center cursor-pointer hover:text-blue-600">
              <MessageCircleMore className="text-slate-500" size={22} />
              <p className="text-xs text-slate-500 mt-1">Message</p>
            </div>

            <div className="text-center flex flex-col items-center justify-center cursor-pointer hover:text-blue-600">
              <Heart className="text-slate-500" fill="currentColor" size={22} />

              <p className="text-xs text-slate-500 mt-1">Orders</p>
            </div>

            <div className="text-center flex flex-col items-center justify-center cursor-pointer hover:text-blue-600">
              <ShoppingCart className="text-slate-500" size={22} />

              <p className="text-xs text-slate-500 mt-1">Cart</p>
            </div>
          </div>

          {/* Mobile cart */}

          <div className="md:hidden">
            <ShoppingCart size={22} />
          </div>

          {/* Hamburger */}

          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </div>
        </div>
      </div>

      {/* Bottom Menu Desktop */}

      <div className="hidden md:flex justify-between px-10 py-3 text-sm border-t border-gray-300">
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-2 cursor-pointer font-medium">
            <Menu size={18} />
            All category
          </div>

          <div className="cursor-pointer hover:text-blue-600">Hot offers</div>

          <div className="cursor-pointer hover:text-blue-600">Gift boxes</div>

          <div className="cursor-pointer hover:text-blue-600">Projects</div>

          <div className="cursor-pointer hover:text-blue-600">Menu item</div>

          <div className="flex items-center gap-1 cursor-pointer">
            Help
            <ChevronDown size={14} />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex items-center gap-1 cursor-pointer">
            English, USD
            <ChevronDown size={14} />
          </div>

          <CountryDropdown/>
        </div>
      </div>

      {/* MOBILE MENU */}

      {mobileMenu && (
        <div className="md:hidden border-t p-4 space-y-4">
          {/* Search mobile */}

          <div className="flex border rounded overflow-hidden">
            <input
              className="flex-1 px-3 py-2 outline-none"
              placeholder="Search"
            />

            <button className="bg-blue-500 text-white px-4">
              <Search size={18} />
            </button>
          </div>

          <div className="space-y-3 text-gray-700">
            <p>All category</p>

            <p>Hot offers</p>

            <p>Gift boxes</p>

            <p>Projects</p>

            <p>Menu item</p>

            <p>Help</p>
          </div>

          <div className="border-t pt-3 space-y-3 border-gray-300 text-gray-700">
            <p>Profile</p>

            <p>Messages</p>

            <p>Orders</p>

            <p>Cart</p>
          </div>
        </div>
      )}
    </div>
  );
}
