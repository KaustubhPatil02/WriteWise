import { Routes, Route, Navigate } from 'react-router-dom'
import First from './components/First/First'
import Home from './components/Home/Home'
import HomeHeader from './components/Home/Header_components/HomeHeader';
import FirstHeader from './components/First/FirstHeader';
import { Blog } from './Context/Context';
import { ToastContainer } from 'react-toastify';


function App() {
  const {currUser} = Blog();
  // const auth = false
  return (
    <>
    {currUser ? <HomeHeader /> : <FirstHeader />}
    <ToastContainer />
    <Routes>
     {currUser && <Route path="/" element={<Home />} />}
      {!currUser&&<Route path="first" element={<First />} />}
      <Route  path='*' element={<Navigate to={!currUser ? "/First" : "/"} />} />
    </Routes>
    
    </>
  )
}

export default App
