import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowItWorks from './pages/HowItWorks';
import NavBar from './components/NavBar';
import AboutUs from './pages/About';
import PrecautionsPage from './pages/PrecautionsPage';
import Nav from './components/Nav';


function App() {

  return (
    <>
      <Router>
      <NavBar/>
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
