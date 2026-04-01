import {
    Star,
    MessageSquare,
    Heart,
    Globe,
    ShieldCheck
} from "lucide-react";
import { useParams } from "react-router-dom";
import { dummey_products } from "../assets/assets";
import Spiner from "../components/ui/Spiner";
import ProductDescriptionSection from "../components/product-details/ProductDescriptionSection";
import RelatedProducts from "../components/product-details/RelatedProducts";

export default function ProductDetailsSection() {
    const { id } = useParams();
    const product = dummey_products.find((p) => p.id === parseInt(id));

   

    const images = [
        product.image,
        product.image,
        product.image,
        product.image,
    ]

    return !product ? <Spiner/> : (

        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-6">

            {/* breadcrumb */}

            <div className="text-xs md:text-sm text-gray-500 mb-4">
                Home › Clothings › Men's wear › Summer clothing
            </div>


            <div className=" bg-white shadow-sm rounded-lg p-4 md:p-6 grid  grid-cols-1  md:grid-cols-2  lg:grid-cols-12 gap-6 ">

                {/* IMAGE SECTION */}

                <div className=" lg:col-span-4 md:col-span-1 order-1 ">
                    <div className=" shadow-sm rounded-lg p-4 md:p-6 flex justify-center ">

                        <img
                            src={product.image}
                            className=" h-[220px] md:h-[260px] lg:h-[320px] object-contain "
                        />
                    </div>

                    {/* thumbnails */}

                    <div className=" flex gap-2 md:gap-3 mt-3 md:mt-4 overflow-x-auto lg:overflow-visible ">

                        {images.map((img, i) => (
                            <div
                                key={i}
                                className=" shadow-sm rounded-md p-2 bg-white cursor-pointer min-w-[60px] hover:shadow-md transition "
                            >
                                <img
                                    src={img}
                                    className=" h-12 w-12 md:h-14 md:w-14 object-contain "
                                />

                            </div>
                        ))}

                    </div>

                </div>


                {/* CENTER */}

                <div className=" lg:col-span-5 md:col-span-1 order-2 ">

                    <div className=" text-green-600 text-xs md:text-sm mb-2 ">

                        ✔ In stock

                    </div>

                    <h2 className=" text-lg md:text-xl font-semibold mb-2 leading-tight ">

                        Mens Long Sleeve T-shirt Cotton Base
                        Layer Slim Muscle

                    </h2>


                    {/* rating */}

                    <div className=" flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 mb-4 ">

                        <div className="flex text-orange-400">
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} />
                        </div>

                        <span className="text-orange-500 font-medium">
                            9.3
                        </span>

                        <div className="flex items-center gap-1">
                            <MessageSquare size={15} />
                            32 reviews
                        </div>

                        <div>
                            154 sold
                        </div>

                    </div>

                    {/* price */}

                    <div className=" bg-orange-50 shadow-sm rounded-lg grid grid-cols-3 mb-5 ">
                        <div className="p-3 md:p-4">
                            <div className=" text-red-500 font-semibold text-base md:text-lg ">
                                $98.00
                            </div>
                            <div className=" text-xs md:text-sm text-gray-500 ">
                                50-100 pcs
                            </div>
                        </div>
                        <div className="p-3 md:p-4">
                            <div className=" font-semibold text-base md:text-lg ">
                                $90.00
                            </div>
                            <div className=" text-xs md:text-sm text-gray-500 ">
                                100-700 pcs
                            </div>
                        </div>
                        <div className="p-3 md:p-4">
                            <div className=" font-semibold text-base md:text-lg ">
                                $78.00
                            </div>
                            <div className=" text-xs md:text-sm text-gray-500 ">
                                700+ pcs
                            </div>
                        </div>
                    </div>

                    {/* details */}

                    <div className=" space-y-2 md:space-y-3 text-xs md:text-sm ">
                        {[
                            ["Price", "Negotiable"],
                            ["Type", "Classic shoes"],
                            ["Material", "Plastic material"],
                            ["Design", "Modern nice"],
                            ["Customization", "Customized logo and design custom packages"],
                            ["Protection", "Refund Policy"],
                            ["Warranty", "2 years full warranty"],
                        ].map((item, i) => (
                            <>
                            <div
                                key={i}
                                className=" flex gap-4 ">
                                <span className=" w-28 md:w-32 text-gray-400 shrink-0 ">
                                    {item[0]}:
                                </span>
                                <span>
                                    {item[1]}
                                </span>
                            </div>
                           
                               {i === 3 && <hr className=" border-gray-200 my-2 md:my-3 " />}
                            
                        
                        </>
                        ))}
                    </div>
                </div>

                {/* SUPPLIER */}
                <div className=" lg:col-span-3 md:col-span-2 order-3 ">
                    <div className=" shadow-sm rounded-lg p-4 md:p-5 bg-white ">
                        <div className=" flex items-center gap-3 mb-4 ">
                            <div className=" h-10 w-10 md:h-12 md:w-12 bg-teal-100 flex items-center justify-center rounded-md font-semibold text-teal-600 ">
                                R
                            </div>
                            <div>
                                <div className=" text-xs md:text-sm text-gray-500 ">
                                    Supplier
                                </div>
                                <div className="font-medium text-sm md:text-base">
                                    Guanjo Trading LLC
                                </div>
                            </div>
                        </div>
                        <div className=" space-y-2 md:space-y-3 text-xs md:text-sm text-gray-500 mb-5 ">
                            <div>
                                🇩🇪 Germany, Berlin
                            </div>
                            <div className="flex gap-2">
                                <ShieldCheck size={15} />
                                Verified Seller
                            </div>
                            <div className="flex gap-2">
                                <Globe size={15} />
                                Worldwide shipping
                            </div>
                        </div>
                        <button className=" w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition text-sm md:text-base ">
                            Send inquiry
                        </button>
                        <button className=" w-full shadow-sm py-2 rounded-md bg-white mt-3 text-sm md:text-base ">
                            Seller's profile
                        </button>
                    </div>
                    <div className="flex items-center gap-2 text-blue-500 mt-4 cursor-pointer text-sm">
                        <Heart size={17} />
                        Save for later
                    </div>
                </div>
            </div>

            {/* // DESCRIPTION TABS  */}
            <ProductDescriptionSection product={product} />
            {/* RELATED PRODUCTS */}
            <RelatedProducts/>
        </div>
    );
}
