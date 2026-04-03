import React from 'react'

export default function ShopFeatureFilter() {
  return (
    <>
      <h3 className="font-semibold mb-3">
              Features
            </h3>
            <div className="space-y-2">

                <label className="flex gap-2 text-gray-600  items-center">
                  <input type="checkbox" className='w-4 h-4'/>
                    Free shipping
                </label>

                <label className="flex gap-2 text-gray-600  items-center">
                  <input type="checkbox" className='w-4 h-4'/>
                    On sale
                </label>
                <label className="flex gap-2 text-gray-600  items-center">
                  <input type="checkbox" className='w-4 h-4'/>
                    New arrival
                </label>
                <label className="flex gap-2 text-gray-600  items-center">
                  <input type="checkbox" className='w-4 h-4'/>
                    Best seller
                </label>
                <label className="flex gap-2 text-gray-600  items-center">
                  <input type="checkbox" className='w-4 h-4'/>
                    Verified only
                </label>
                <button className="text-blue-600 text-sm mt-3">
                  See all
                </button>
            </div>
    </>
  )
}
