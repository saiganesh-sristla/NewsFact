import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowItWorks from './pages/HowItWorks';
import NavBar from './components/NavBar';


function App() {

  return (
    <>
      <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
