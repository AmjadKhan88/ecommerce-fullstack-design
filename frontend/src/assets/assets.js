import robot_orking from "./robot-working.png";
import watch from "./watch.png";
import laptop from "./pngwing.com.png";
import camera_2 from "./cameras_2.png";
import camera from "./cameras.png";
import headphone from "./headphone.png";
import headphone_2 from "./headphone_2.png";
import sumsung_mobile from "./sumsung-mobile.png";
import lamp from "./lamp.png";
import lamp_2 from "./lamp_2.png";
import soft_chair from "./Soft_chairs.png";
import soft_chair_2 from "./Soft_chairs_2.png";
import outdoor_baner from "./outdoor_baner.png";
import iphone_13 from "./iphone-13.png";


export const assets = {
    robot_orking,
    watch,
    laptop,
    camera_2,
    camera,
    headphone,
    headphone_2,
    sumsung_mobile,
    lamp,
    lamp_2,
    soft_chair,
    soft_chair_2,
    outdoor_baner,
    iphone_13,
}

 export const deals_section_products = [
    {
      name: "Smart watches",
      img: assets.watch,
      discount: "-25%",
    },
    {
      name: "Laptops",
      img: assets.laptop,
      discount: "-15%",
    },
    {
      name: "GoPro cameras",
      img: assets.camera_2,
      discount: "-40%",
    },
    {
      name: "Headphones",
      img: assets.headphone,
      discount: "-25%",
    },
    {
      name: "Canon cameras",
      img: assets.camera,
      discount: "-25%",
    },
  ];

 export const home_outdoor_products = [
    {
      title: "Soft chairs",
      price: "USD 19",
      img: assets.soft_chair,
    },
    {
      title: "Sofa & chair",
      price: "USD 19",
      img: assets.soft_chair_2,
    },
    {
      title: "Kitchen dishes",
      price: "USD 19",
      img: assets.lamp,
    },
    {
      title: "Smart watches",
      price: "USD 19",
      img: assets.watch,
    },
    {
      title: "Kitchen mixer",
      price: "USD 100",
      img: assets.lamp_2,
    },
    {
      title: "Blenders",
      price: "USD 39",
      img: assets.laptop,
    },
    {
      title: "Home appliance",
      price: "USD 19",
      img: assets.soft_chair,
    },
    {
      title: "Coffee maker",
      price: "USD 10",
      img: assets.lamp,
    },
  ];

export const recommended_items_products = [
  {
    id: 1,
    title: "T-shirts with multiple colors, for men",
    price: "$10.30",
    img: watch,
  },
  {
    id: 2,
    title: "Jeans shorts for men blue color",
    price: "$10.30",
    img: laptop,
  },
  {
    id: 3,
    title: "Brown winter coat medium size",
    price: "$12.50",
    img: camera,
  },
  {
    id: 4,
    title: "Jeans bag for travel for men",
    price: "$34.00",
    img: camera_2,
  },
  {
    id: 5,
    title: "Leather wallet",
    price: "$99.00",
    img: headphone,
  },
  {
    id: 6,
    title: "Canon camera black, 100x zoom",
    price: "$9.99",
    img: headphone_2,
  },
  {
    id: 7,
    title: "Headset for gaming with mic",
    price: "$8.99",
    img: sumsung_mobile,
  },
  {
    id: 8,
    title: "Smartwatch silver color modern",
    price: "$10.30",
    img: lamp_2,
  },
  {
    id: 9,
    title: "Blue wallet for men leather material",
    price: "$10.30",
    img: lamp,
  },
  {
    id: 10,
    title: "Jeans bag for travel for men",
    price: "$80.95",
    img: soft_chair,
  },
];

export const dummey_products = [

{
id:1,
title:"Canon Camera EOS 2000",
price:998,
oldPrice:1128,
rating:4.5,
orders:154,
shipping:true,
brand:"Canon",
category:"electronics",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
image:"https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_SL1500_.jpg"
},

{
id:2,
title:"Samsung Galaxy S22",
price:799,
oldPrice:899,
rating:4.7,
orders:210,
shipping:true,
brand:"Samsung",
category:"smartphones",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
image: assets.sumsung_mobile
},

{
id:3,
title:"iPhone 13",
price:1099,
oldPrice:1299,
rating:4.8,
orders:320,
shipping:true,
brand:"Apple",
category:"smartphones",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
image:iphone_13
},

{
  id:4,
  title:"Sony WH-1000XM4 Wireless Headphones",
  price:349,
  oldPrice:399,
  rating:4.6,
  orders:120,
  shipping:true,
  brand:"Sony",
  category:"electronics",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  image:"https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
}


];
