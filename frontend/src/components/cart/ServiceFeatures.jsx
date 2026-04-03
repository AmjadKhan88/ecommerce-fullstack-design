import { Lock, MessageSquare, Truck } from "lucide-react";

export default function ServiceFeatures() {

    const features = [
        {
            icon: <Lock size={20} />,
            title: "Secure payment",
            desc: "Have you ever finally just"
        },
        {
            icon: <MessageSquare size={20} />,
            title: "Customer support",
            desc: "Have you ever finally just"
        },
        {
            icon: <Truck size={20} />,
            title: "Free delivery",
            desc: "Have you ever finally just"
        }
    ];


    return (

        <div className="bg-gray-100 rounded-lg p-6 mt-6 max-w-[1240px] mx-auto">

            <div className="grid sm:grid-cols-4 gap-3">

                {features.map((item, index) => (

                    <div
                        key={index}
                        className="flex items-center gap-4"
                    >

                        {/* icon */}
                        <div className="w-[50px] h-[50px] rounded-full bg-gray-200 flex items-center justify-center text-gray-600">

                            {item.icon}

                        </div>

                        {/* text */}
                        <div>

                            <h3 className="font-medium text-gray-800">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-sm">
                                {item.desc}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}
