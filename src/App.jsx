import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowItWorks from './pages/HowItWorks';
import Navbar from './components/Navbar';
import AboutUs from './pages/About';
import PrecautionsPage from './pages/PrecautionsPage';


function App() {

  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/precautions' element={<PrecautionsPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
