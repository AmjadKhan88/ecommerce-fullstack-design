import React from "react";
import {
  ArrowLeft,
  ChevronDown
} from "lucide-react";
import ServiceFeatures from "../components/cart/ServiceFeatures";
import SavedForLater from "../components/cart/SavedForLater";
import SuperDiscount from "../components/cart/SuperDiscount";
import CartChecout from "../components/cart/CartChecout";
import CartItemesCard from "../components/cart/CartItemesCard";

export default function CartPage() {

  const cartItems = [
    {
      id: 1,
      title: "T-shirts with multiple colors, for men and lady",
      price: 78.99,
      qty: 9,
      seller: "Artel Market",
      img: "https://static.vecteezy.com/system/resources/previews/022/100/805/non_2x/blue-t-shirt-product-mockup-front-view-free-png.png"
    },
    {
      id: 2,
      title: "T-shirts with multiple colors, for men and lady",
      price: 39.00,
      qty: 3,
      seller: "Best factory LLC",
      img: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
    },
    {
      id: 3,
      title: "T-shirts with multiple colors, for men and lady",
      price: 170.50,
      qty: 1,
      seller: "Artel Market",
      img: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
    }
  ];


  return (

    <div className="bg-gray-100 min-h-screen p-6">

      <div className="max-w-[1200px] mx-auto">

        <h1 className="text-2xl font-semibold mb-6">
          My cart (3)
        </h1>


        <div className="grid md:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-5">

            {cartItems.map(item => (
              <CartItemesCard item={item}/>

            ))}



            {/* bottom buttons */}
            <div className="flex justify-between mt-6">

              <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded">

                <ArrowLeft size={18} />

                Back to shop

              </button>

              <button className="border border-gray-100 shadow-sm px-5 py-2 rounded text-gray-600 hover:bg-gray-100 cursor-pointer">
                Remove all
              </button>

            </div>


          </div>



          {/* RIGHT */}
          <CartChecout/>

        </div>

      </div>

      {/* // service features  */}
      <ServiceFeatures/>

      {/* // Saved For Later  */}
      <SavedForLater/>

      {/* // Super discount  */}
      <SuperDiscount/>

    </div>

  );

}
