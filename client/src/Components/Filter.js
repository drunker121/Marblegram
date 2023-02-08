import React from 'react';
import { MdLocationOn , MdSearch, MdCategory } from "react-icons/md";
import { FaHome , FaRupeeSign} from "react-icons/fa";

const Filter = () => {
  return (
    <>
    <div className='filter d-flex justify-content-center'>
      <div className='filter-box d-flex'>
        <div className='d-flex'>
        <div className='mx-2'><MdLocationOn/></div>
            <div className='propdiv '>
            <select className='property text-muted' placeholder='op'>
                <option className='' style={{display: 'none'}}>Enter City, Locaity</option>
                <option>Delhi</option>
                <option>Gurugram</option>
                <option>Noida</option>
                <option>Kishangarh</option>
                <option>Jaipur</option>
            </select>
            </div>
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
            <div className='me-1 my-1'>Apply Filters</div>
            </button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Filter