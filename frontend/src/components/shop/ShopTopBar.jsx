import { Grid2X2, Menu } from 'lucide-react'
import React from 'react'

export default function ShopTopBar() {
  return (
    <div className="flex items-center justify-between shadow-sm bg-white rounded-lg p-4 mb-6">

        <div className="text-gray-700">
          <span className="font-semibold">12,911 items</span> in
          <span className="font-semibold"> Mobile accessory</span>
        </div>

        <div className="flex items-center gap-6">

          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="w-4 h-4"/>
            Verified only
          </label>

          <select className="border rounded-md px-3 py-1.5 text-gray-600">
            <option>Featured</option>
            <option>Price low</option>
            <option>Price high</option>
          </select>

          <div className="flex border rounded-md overflow-hidden">

            <button className="p-2 bg-gray-100">
              <Grid2X2 size={18}/>
            </button>

            <button className="p-2">
              <Menu size={18}/>
            </button>

          </div>

        </div>

      </div>
  )
}
