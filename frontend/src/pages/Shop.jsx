import { Heart, Grid2X2, Menu } from "lucide-react";
import ShopTopBar from "../components/shop/ShopTopBar";
import FilterSidebar from "../components/shop/FilterSidebar";
import ShopProductCard from "../components/shop/ShopProductCard";
import {dummey_products} from "../assets/assets";
import Pagination from "../components/shop/Pagination";

export default function Shop() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 pb-6 pt-3">

      {/* Breadcrumb */}
      <div className="text-gray-400 text-sm md:text-[16px] mb-5 font-light">
        Home › Clothings › Men’s wear › Summer clothing
      </div>


      



      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-6">

        {/* SIDEBAR */}
        <FilterSidebar/>



        {/* PRODUCTS */}
        <div className="col-span-9 space-y-5">
        {/* TOP BAR */}
        <ShopTopBar/>

          {/* PRODUCT CARD */}
          {dummey_products.map((product) => (
            <ShopProductCard key={product.id} product={product} />
          ))}

          <Pagination />

        </div>

      </div>

    </div>
  );
}
