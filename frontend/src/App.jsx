import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetailsSection from './pages/ProductDetailsSection'
import CartPage from './pages/CartPage'
import { ToastContainer } from 'react-toastify'
import Login from './components/auth/Login'

function App() {
  return (
    <div className='bg-gray-100'>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='home/shop/product-details/:id' element={<ProductDetailsSection/>} />
          <Route path='cart' element={<CartPage/>} />
        </Route>
        <Route path='/auth/:type' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
