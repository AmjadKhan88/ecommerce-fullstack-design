import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'

function App() {
  return (
    <div className='bg-gray-100'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path='about' element={<About />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
