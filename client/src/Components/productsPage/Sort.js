import React from 'react'
import { BsFillGridFill, BsList} from 'react-icons/bs'
import { useFilterContext } from '../../Context/Filter_Context';
import './Sort.css';

const Sort = () => {

    const {grid_view , setGridView , setListView, filter_products} =useFilterContext();

  return (
    <>
        <div className='container d-flex justify-content-between'>
            <div className='d-flex'>
                <button className={grid_view ? 'active sort-btn' : 'sort-btn' } onClick={setGridView}>
                    <BsFillGridFill/>
                </button>
                <button className={!grid_view ? 'active sort-btn' : 'sort-btn' } onClick={setListView}>
                    <BsList/> 
                </button>
            </div>
            <div>
                <p>{`${filter_products.length}`} products available</p>
            </div>
            <div>
                sorting table
            </div>
        </div>
    </>
  )
}

export default Sort