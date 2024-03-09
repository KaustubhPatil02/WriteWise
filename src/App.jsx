import { Routes, Route, Navigate } from 'react-router-dom'
import First from './components/First/First'
import Home from './components/Home/Home'
import HomeHeader from './components/Home/HomeHeader';
import FirstHeader from './components/First/FirstHeader';
import { Blog } from './Context/Context';

function App() {
  const {currUser} = Blog();
  // const auth = false
  return (
    <>
    {currUser ? <HomeHeader /> : <FirstHeader />}
    <Routes>
     {currUser && <Route path="/" element={<Home />} />}
      {!currUser&&<Route path="first" element={<First />} />}
      <Route  path='*' element={<Navigate to={!currUser ? "/First" : "/"} />} />
    </Routes>
    
    </>
  )
}

export default App
