import React from 'react';
import FormatPrice from '../../Helpers/FormatPrice';
// import Product from './Product';
import { Link } from 'react-router-dom';

const ListView = ({products}) => {
  return (
    <>
        <div className='container my-5'>
        {products.map((curElem) => {
            const {name ,image , price, city} = curElem;
            {/* return <Product key={curElem.pid} {...curElem} />; */}
            return (
                <div className='container grid grid-two-column'>
                    <figure>
                        <img src={image} alt={name}/>
                    </figure>
                    <div className='card-data'>
                        <h3>{name}</h3>
                        <p><FormatPrice price={price}/></p>
                        <p>{city}</p>
                        <Link to="/" className="btn btn-primary btn-block">Add to Enquiry</Link>
                    </div>
                </div>

            );
        })}
        </div>
    </>
  )
}

export default ListView