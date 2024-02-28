import { Routes, Route } from 'react-router-dom'
import First from './components/First/First'
import Home from './components/Home/Home'
import HomeHeader from './components/Home/HomeHeader';
import FirstHeader from './components/First/FirstHeader';

function App() {
  const auth = false;
  return (
    <>
    {auth ? <HomeHeader /> : <FirstHeader />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="first" element={<First />} />
      
    </Routes>
    
    </>
  )
}

export default App
