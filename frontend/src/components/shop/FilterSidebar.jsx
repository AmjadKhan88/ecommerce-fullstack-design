import React from 'react'
import PriceSlider from './PriceSlider'
import BrandFilter from './BrandFilter'
import ShopCategoryFilter from './ShopCategoryFilter'
import ShopFeatureFilter from './ShopFeatureFilter'

export default function FilterSidebar() {
  return (
     <div className="col-span-3">

          <div className="shadow-sm rounded-lg p-4">
            <ShopCategoryFilter/>
            <hr className="my-5 text-gray-300"/>
            <BrandFilter/>
            <hr className="my-5 text-gray-300"/>
            <ShopFeatureFilter/>
            <hr className="my-5 text-gray-300"/>
            <PriceSlider/>
          </div>

        </div>
  )
}
