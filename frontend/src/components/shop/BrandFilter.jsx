export default function BrandFilter() {


  return (
    <div>
      <h3 className="font-semibold mb-3">
              Brands
            </h3>
            <div className="space-y-2">
            <label className="flex gap-2 text-gray-600 text-lg items-center">
              <input type="checkbox" className='w-4 h-4'/>
              Samsung
            </label>
            <label className="flex gap-2 text-gray-600 text-lg items-center">
              <input type="checkbox" className='w-4 h-4'/>
                Apple
            </label>
            <label className="flex gap-2 text-gray-600 text-lg items-center">
              <input type="checkbox" className='w-4 h-4'/>
               Huawai
            </label>
            <label className="flex gap-2 text-gray-600 text-lg items-center">
              <input type="checkbox" className='w-4 h-4'/>
              Pocco
            </label>
            <label className="flex gap-2 text-gray-600 text-lg items-center">
              <input type="checkbox" className='w-4 h-4'/>
              Lenovo
            </label>
            <button className="text-blue-600 text-sm mt-3">
                See all
              </button>
            </div>
    </div>
  );
}
