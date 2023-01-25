import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import { MdLocationOn , MdSearch, MdCategory } from "react-icons/md";
import { FaHome , FaRupeeSign} from "react-icons/fa";
import Services from './Home/Services';
import Products from './Home/Products';
import Carousel from './Carousel';
import Talk from './Home/Talk';

const Home = () => {
  return (
    <>
    <Carousel/>
    <div className='bodys d-flex flex-column'>

      <div className='welcome-marble d-flex justify-content-center gap-3 text-white'>
        <h1 className='welcome font-weight-light'>WELCOME TO</h1>
        <h1 className='marble'> MARBLEGRAM</h1>
      </div>

      <div className='search d-flex'>

        <div className='d-flex'>
          <div className='mx-2'><MdLocationOn/></div>
          <div><input className='inputcity mx-1' placeholder='Enter City, Locality'></input></div>
        </div>

        <div className='d-flex'>
          <div className='mx-2'><FaHome/></div>
          <div className='propdiv '>
            <select className='property text-muted' placeholder='op'>
              <option className='' style={{display: 'none'}}>Property Type</option>
              <option>Residential</option>
              <option>Commertial</option>
            </select>
          </div>
        </div>

        <div className='d-flex'>
          <div className='mx-2'><MdCategory/></div>
          <div>
            <select className='category text-muted'>
              <option style={{display: 'none'}}>Category</option>
              <option>Marble</option>
              <option>Granite</option>
              <option>Arts Work</option>
            </select>
          </div>
        </div>

        <div className='d-flex'>
          <div className='mx-2'><FaRupeeSign/></div>
          <div>
            <select className='budget text-muted'>
              <option style={{display: 'none'}}>Budget</option>
              <option>1000 to 10000</option>
              <option>10000 to 50000</option>
              <option>50000 to 200000</option>
            </select>
          </div>
        </div>

        <div className='d-flex mx-2'>
          <button type="button" className="sbtn d-flex btn text-white">
            <div className='me-2 my-1'><MdSearch/></div>
            <div className='me-1 my-1'>Search</div>
          </button>
        </div>
      </div>

    </div>
    <Services/>
    <Products/>
    <Talk/>
    </>
  )
}

export default Home