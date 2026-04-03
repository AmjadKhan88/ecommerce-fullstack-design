import React from 'react'

export default function CartChecout() {
  return (
     <div className="space-y-4">

            {/* coupon */}
            <div className="bg-white shadow-sm rounded-lg p-4">

              <p className="text-gray-600 mb-2">
                Have a coupon?
              </p>

              <div className="flex">

                <input
                  placeholder="Add coupon"
                  className="border border-gray-200 rounded-l px-3 py-2 w-full outline-none"
                />

                <button className="bg-blue-600 text-white px-4 rounded-r">
                  Apply
                </button>

              </div>

            </div>



            {/* summary */}
            <div className="bg-white shadow-sm rounded-lg p-5">

              <div className="space-y-2 text-gray-600">

                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>$1403.97</span>
                </div>

                <div className="flex justify-between text-red-500">
                  <span>Discount:</span>
                  <span>- $60.00</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Tax:</span>
                  <span>+ $14.00</span>
                </div>

              </div>

              <div className="border border-gray-200 my-4"></div>


              <div className="flex justify-between font-semibold text-lg">

                <span>Total:</span>

                <span>$1357.97</span>

              </div>


              <button className="w-full bg-green-600 text-white py-3 rounded-lg mt-5 font-medium hover:bg-green-800 cursor-pointer">
                Checkout
              </button>


              {/* payments */}
              <div className="flex gap-3 mt-4 justify-center">

                <img
                  className="h-6"
                  src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
                />

                <img
                  className="h-6"
                  src="https://cdn-icons-png.flaticon.com/512/196/196566.png"
                />

                <img
                  className="h-6"
                  src="https://cdn-icons-png.flaticon.com/512/196/196565.png"
                />

                <img
                  className="h-6"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968299.png"
                />

              </div>

            </div>

          </div>
  )
}
