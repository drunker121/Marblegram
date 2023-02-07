import { Cursor } from 'mongoose';
import React from 'react';
import { useProductContext } from '../Context/ProductContext';
import Product from './Product';


const Products = () => {
  const {isLoading , isError, products} = useProductContext();

  if ( isLoading)
  {
    return <div>......Loading</div>
  }
  return (
    <>
    <div>
      {products.map((curElem) => {
        return <Product key={curElem.id} {...curElem}/>
      })
      }
    </div>
    </>
  )
}

export default Products