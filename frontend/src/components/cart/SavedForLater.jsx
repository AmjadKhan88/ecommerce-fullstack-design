import { ShoppingCart } from "lucide-react";
import { dummey_products } from "../../assets/assets";

export default function SavedForLater() {



    return (

        <div className="bg-white shadow-sm rounded-lg p-6 mt-6 max-w-[1200px] mx-auto">

            <h2 className="text-xl font-semibold mb-6">
                Saved for later
            </h2>


            <div className="grid md:grid-cols-4 gap-6">

                {dummey_products.slice(0,4).map(item => (

                    <div key={item.id}>

                        {/* image box */}
                        <div className="bg-gray-100 rounded-lg h-[200px] flex items-center justify-center">

                            <img
                                src={item.image}
                                className="h-[140px] object-contain"
                            />

                        </div>


                        {/* price */}
                        <p className="font-semibold text-lg mt-4">
                            ${item.price}
                        </p>


                        {/* title */}
                        <p className="text-gray-500 text-sm mt-1">
                            {item.title}
                        </p>


                        {/* button */}
                        <button className="flex items-center gap-2 border rounded px-4 py-2 mt-4 text-blue-600 hover:bg-gray-50 cursor-pointer">

                            <ShoppingCart size={18} />

                            Move to cart

                        </button>

                    </div>

                ))}

            </div>

        </div>

    );

}
