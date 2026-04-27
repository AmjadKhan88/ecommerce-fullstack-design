
import { ChevronDown } from 'lucide-react'
import React from 'react'
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

export default function CartItemesCard({item}) {
  const { removeFromCart } = useAuth();

  const product = item.product || item;
  const quantity = item.quantity || item.qty || 1;

  const handleRemove = async () => {
    const id = product._id || product.id || product;
    try {
      await removeFromCart(id);
    } catch (error) {
      toast.error('Failed to remove');
    }
  };

  return (
    <div key={product._id || product.id}>

                <div className="flex gap-4">

                  {/* image */}
                  <div className="w-[80px] h-[80px] shadow-sm rounded-lg flex items-center justify-center bg-gray-50">

                    <img
                      src={product.image || product.images?.[0] || product.img}
                      className="w-[55px]"
                      alt={product.title}
                    />

                  </div>


                  {/* info */}
                  <div className="flex-1">

                    <div className="flex justify-between">

                      <h3 className="font-medium text-gray-800">
                        {product.title}
                      </h3>

                      <p className="font-semibold">
                        ${product.price || product.price?.toFixed ? product.price.toFixed(2) : product.price}
                      </p>

                    </div>

                    <p className="text-gray-500 text-sm mt-1">
                      Size: medium, Color: blue, Material: Plastic
                    </p>

                    <p className="text-gray-500 text-sm">
                      Seller: {item.seller}
                    </p>


                    <div className="flex flex-wrap-reverse sm:flex-nowrap justify-between items-center mt-3 gap-3">

                      <div className="flex gap-3">

                        <button onClick={handleRemove} className="text-red-500 shadow-sm border border-gray-200 px-2 sm:px-3 py-1 rounded text-sm">
                          Remove
                        </button>

                        <button className="text-blue-600 shadow-sm border border-gray-200 px-2 sm:px-3 py-1 rounded text-sm">
                          Save for later
                        </button>

                      </div>


                      {/* qty */}
                      <div className="border border-gray-200 rounded flex items-center   px-2 sm:px-3 py-1 gap-1.5 sm:gap-3">

                        <span className="text-gray-600 text-sm">
                          Qty: {item.qty}
                        </span>

                        <ChevronDown size={16} />

                      </div>

                    </div>

                  </div>

                </div>


                {/* divider */}
                <div className="border-b my-5 border-gray-200"></div>

              </div>
  )
}
