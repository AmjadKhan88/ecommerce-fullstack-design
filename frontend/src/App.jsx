import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetailsSection from './pages/ProductDetailsSection'
import CartPage from './pages/CartPage'

function App() {
  return (
    <div className='bg-gray-100'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='home/shop/product-details/:id' element={<ProductDetailsSection/>} />
          <Route path='cart' element={<CartPage/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
