import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
function Layout() {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
