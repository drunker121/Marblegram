import './App.css';
// import {Routes, Router} from "react-router-dom";
import Navbar from './Components/Navbar';
import Calci from './Components/Calci';
import Home from './Components/Home';
import Carousel from './Components/Carousel';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Carousel/> */}
      <Home/>
      {/* <Calci/> */}
    </>
  );
}

export default App;
