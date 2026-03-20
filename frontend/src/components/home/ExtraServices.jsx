import {
  Search,
  Package,
  Send,
  ShieldCheck
} from "lucide-react";

const services = [
  {
    id:1,
    title:"Source from Industry Hubs",
    img:"https://picsum.photos/400/200?1",
    icon:<Search size={20}/>
  },
  {
    id:2,
    title:"Customize Your Products",
    img:"https://picsum.photos/400/200?2",
    icon:<Package size={20}/>
  },
  {
    id:3,
    title:"Fast, reliable shipping by ocean or air",
    img:"https://picsum.photos/400/200?3",
    icon:<Send size={20}/>
  },
  {
    id:4,
    title:"Product monitoring and inspection",
    img:"https://picsum.photos/400/200?4",
    icon:<ShieldCheck size={20}/>
  }
];

const suppliers = [
  {
    country:"Arabic Emirates",
    site:"shopname.ae",
    flag:"https://flagcdn.com/w40/ae.png"
  },
  {
    country:"Australia",
    site:"shopname.ae",
    flag:"https://flagcdn.com/w40/au.png"
  },
  {
    country:"United States",
    site:"shopname.ae",
    flag:"https://flagcdn.com/w40/us.png"
  },
  {
    country:"Russia",
    site:"shopname.ru",
    flag:"https://flagcdn.com/w40/ru.png"
  },
  {
    country:"Italy",
    site:"shopname.it",
    flag:"https://flagcdn.com/w40/it.png"
  },
  {
    country:"Denmark",
    site:"denmark.com.dk",
    flag:"https://flagcdn.com/w40/dk.png"
  },
  {
    country:"France",
    site:"shopname.com.fr",
    flag:"https://flagcdn.com/w40/fr.png"
  },
  {
    country:"Arabic Emirates",
    site:"shopname.ae",
    flag:"https://flagcdn.com/w40/ae.png"
  },
  {
    country:"China",
    site:"shopname.ae",
    flag:"https://flagcdn.com/w40/cn.png"
  },
  {
    country:"Great Britain",
    site:"shopname.co.uk",
    flag:"https://flagcdn.com/w40/gb.png"
  }
];

export default function ExtraServices() {

  return (

    <div className="max-w-[1400px] mx-auto  px-3 md:px-6 bg-slate-200/70">

{/* SERVICES */}

      <h2 className="text-[22px] font-semibold mb-6 pt-4">
        Our extra services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {services.map((item)=>(
          
          <div 
          key={item.id}
          className="bg-white shadow-sm rounded-lg overflow-hidden relative"
          >

{/* image */}

            <div className="h-[140px] overflow-hidden">

              <img
              src={item.img}
              className="w-full h-full object-cover"
              />

            </div>

{/* floating icon */}

            <div className="absolute right-5 top-[105px] w-[50px] h-[50px] bg-blue-100 rounded-full flex items-center justify-center border-4 border-white">

              {item.icon}

            </div>

{/* text */}

            <div className="p-4 pt-6">

              <p className="text-[16px] font-medium leading-6">
                {item.title}
              </p>

            </div>

          </div>

        ))}

      </div>

{/* SUPPLIERS */}

      <h2 className="text-[22px] font-semibold mt-14 mb-6">
        Suppliers by region
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 pb-5">

        {suppliers.map((item,index)=>(
          
          <div 
          key={index}
          className="flex items-center gap-3"
          >

            <img
            src={item.flag}
            className="w-[28px] h-[20px] object-cover rounded-sm"
            />

            <div>

              <p className="text-[15px] font-medium">
                {item.country}
              </p>

              <p className="text-gray-400 text-[13px]">
                {item.site}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}
