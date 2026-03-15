import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default Layout
