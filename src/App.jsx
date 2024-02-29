import { Routes, Route, Navigate } from 'react-router-dom'
import First from './components/First/First'
import Home from './components/Home/Home'
import HomeHeader from './components/Home/HomeHeader';
import FirstHeader from './components/First/FirstHeader';

function App() {
  const curr_user = false;
  return (
    <>
    {curr_user ? <HomeHeader /> : <FirstHeader />}
    <Routes>
     {curr_user && <Route path="/" element={<Home />} />}
      {!curr_user&&<Route path="first" element={<First />} />}
      <Route  path='*' element={<Navigate to={!curr_user ? "/First" : "/"} />} />
    </Routes>
    
    </>
  )
}

export default App
