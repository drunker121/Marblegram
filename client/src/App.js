import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Home/Footer'
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Financial from './Components/OurServices/Financial';
import Calci from './Components/OurServices/Calci';
import Installation from './Components/OurServices/Installation';
import Selection from './Components/OurServices/Selection';
import Interior from './Components/OurServices/Interior';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/financialanalyst" element={<Financial/>} />
        <Route path="/financialanalyst/calci" element={<Calci/>} />
        <Route path="/installation" element={<Installation/>} />
        <Route path="/selectionconsultancy" element={<Selection/>} />
        <Route path="/interior" element={<Interior/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
