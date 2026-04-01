import { dummey_products } from "../../assets/assets";

export default function RelatedProducts() {

     

    return (

        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 mt-8">

            {/* related */}

            <div className=" bg-white shadow-sm rounded-lg p-4 md:p-6 ">

                <h3 className=" font-semibold text-lg mb-5 ">

                    Related products

                </h3>


                <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ">

                    {dummey_products.map((item, i) => (
                        <div
                            key={i}
                            className=" cursor-pointer group ">

                            <div className=" bg-gray-100 rounded-lg p-4 flex justify-center items-center mb-3 group-hover:shadow-sm transition ">

                                <img
                                    src={item.image}
                                    className=" h-24 md:h-28 object-contain " />
                            </div>


                            <div className=" text-sm text-gray-700 leading-snug mb-1 group-hover:text-blue-600 ">

                                {item.title}

                            </div>


                            <div className=" text-sm text-gray-400 ">

                                ${item.price} - ${item.oldPrice}

                            </div>

                        </div>
                    ))}

                </div>

            </div>


            {/* promo banner */}

            <div className=" mt-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ">

                <div>

                    <h3 className=" text-white text-lg md:text-2xl font-semibold mb-1 ">

                        Super discount on more than 100 USD

                    </h3>

                    <p className=" text-blue-100 text-sm md:text-base ">

                        Have you ever finally just write dummy info

                    </p>

                </div>


                <button className=" bg-orange-500 text-white px-6 py-2 md:py-3 rounded-md hover:bg-orange-600 transition ">

                    Shop now

                </button>

            </div>


        </div>

    )

}
