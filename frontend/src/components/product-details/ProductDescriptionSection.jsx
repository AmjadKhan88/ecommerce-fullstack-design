import { Check } from "lucide-react";
import { useState } from "react";
import { dummey_products } from "../../assets/assets";

export default function ProductDescriptionSection( {product} ) {

    const [tab, setTab] = useState("description")

   

    return (

        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 mt-8">

            <div className=" grid  grid-cols-1  lg:grid-cols-12 gap-6 ">

                {/* LEFT CONTENT */}

                <div className=" lg:col-span-9 order-2 lg:order-1 ">

                    <div className=" bg-white shadow-sm rounded-lg ">

                        {/* tabs */}

                        <div className=" flex gap-6 px-4 md:px-6 pt-4 text-sm md:text-base ">

                            {["description", "reviews", "shipping", "about"].map((item) => {

                                return (

                                    <button
                                        key={item}
                                        onClick={() => setTab(item)}
                                        className={`capitalizepb-3 ${tab === item
                                                ?
                                                "text-blue-600 border-b-2 border-blue-600"
                                                :
                                                "text-gray-500"
                                            } `}
                                    >
                                        {item === "about" ? "About seller" : item}
                                    </button>

                                )

                            })}

                        </div>


                        {/* content */}

                        <div className="p-4 md:p-6">

                            {tab === "description" && (

                                <div>

                                    <p className=" text-gray-600 text-sm md:text-base leading-relaxed mb-6 ">
                                        {product.description}
                                    </p>


                                    {/* table */}

                                    <div className=" grid grid-cols-1 md:grid-cols-2 max-w-[600px] mb-6 ">
                                        {[
                                            ["Model", "#8786867"],
                                            ["Style", "Classic style"],
                                            ["Certificate", "ISO-898921212"],
                                            ["Size", "34mm x 450mm x 19mm"],
                                            ["Memory", "36GB RAM"]
                                        ].map((item, i) => (
                                            <>
                                                <div key={i}
                                                    className=" bg-gray-100 p-3 text-sm text-gray-600 shadow-sm "
                                                >

                                                    {item[0]}

                                                </div>

                                                <div
                                                    className=" bg-gray-50 p-3 text-sm shadow-sm "
                                                >

                                                    {item[1]}

                                                </div>
                                            </>
                                        ))}

                                    </div>


                                    {/* features */}

                                    <div className="space-y-3">

                                        {[
                                            "Some great feature name here",
                                            "Lorem ipsum dolor sit amet, consectetur",
                                            "Duis aute irure dolor in reprehenderit",
                                            "Some great feature name here"
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                className=" flex items-center gap-3 text-sm text-gray-600 "
                                            >

                                                <Check
                                                    size={16}
                                                    className="text-gray-400"
                                                />

                                                {item}

                                            </div>
                                        ))}

                                    </div>

                                </div>

                            )}

                        </div>

                    </div>

                </div>


                {/* SIDEBAR */}

                <div className=" lg:col-span-3 order-1 lg:order-2 ">

                    <div className=" bg-white shadow-sm rounded-lg p-4 md:p-5 ">

                        <h3 className=" font-semibold mb-4 ">

                            You may like

                        </h3>


                        <div className="space-y-4">

                            {dummey_products.slice(0, 5).map((item, i) => (
                                <div
                                    key={i}
                                    className=" flex gap-3 cursor-pointer hover:opacity-80 transition "
                                >

                                    <div className=" shadow-sm rounded-md p-2 bg-white ">

                                        <img
                                            src={item.image}
                                            className=" h-16 w-16 object-contain "
                                        />

                                    </div>


                                    <div>

                                        <div className=" text-sm text-gray-700 leading-snug mb-1 ">

                                            {item.title}

                                        </div>

                                        <div className=" text-sm text-gray-400 ">

                                            ${item.price} - ${item.oldPrice}

                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}
