import { Heart } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Spiner from '../ui/Spiner';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

export default function ShopProductCard({product}) {
  const navigate = useNavigate();
  const { addToCart, user } = useAuth();
  return (
     <div className="shadow bg-white rounded-md p-5 flex gap-6 hover:shadow-md transition">

            <img
              src={product.image}
              alt={product.title}
              className="w-[170px] h-[170px] object-contain"
            />


            <div className="flex-1">

              <h2 className="font-semibold text-lg mb-2">
                {product.title}
              </h2>


              {/* PRICE */}
              <div className="flex items-center gap-3 mb-2">

                <span className="text-xl font-bold">
                  ${product.price.toFixed(2)}
                </span>

                <span className="text-gray-400 line-through">
                  ${product.oldPrice.toFixed(2)}
                </span>

              </div>


              {/* RATING */}
              <div className="flex items-center gap-3 text-sm mb-2">

                <span className="text-orange-400">
                  ★★★★☆
                </span>

                <span className="text-orange-500">
                  {product.rating}
                </span>

                <span className="text-gray-400">
                  {product.orders} orders
                </span>

                <span className="text-green-600">
                  Free Shipping
                </span>

              </div>


              <p className="text-gray-500 mb-2">
                {product.description}
              </p>

              <button onClick={()=> navigate(`/home/shop/product-details/${product.id}`)} className="text-blue-600 text-sm font-medium">
                View details
              </button>

              <button onClick={() => {
                if (!user) return navigate('/auth/login');
                // require server product id
                const pid = product._id;
                if (!pid) {
                  toast.info('Product not available to add to cart. View details instead.');
                  return navigate(`/home/shop/product-details/${product.id}`);
                }
                addToCart(pid);
              }} className="ml-3 bg-blue-600 text-white px-3 py-1 rounded text-sm">
                Add to cart
              </button>

            </div>



            {/* WISHLIST */}
            <div>

              <button className="border border-gray-300 text-blue-600 rounded-lg p-2 hover:bg-gray-100">

                <Heart size={20}/>

              </button>

            </div>


          </div>
  );
}
