import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
// import Calci from './Components/Calci';
import Home from './Components/Home';
import Footer from './Components/Home/Footer'
import About from './Components/About';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
      <Footer/>
      {/* <Calci/> */}
    </>
  );
}

export default App;
