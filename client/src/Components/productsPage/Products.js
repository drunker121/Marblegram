// import { Cursor } from 'mongoose';
import React from "react";
import { useProductContext } from "../../Context/ProductContext";
import Product from "./Product";
import Filter from "./Filter";
import { useFilterContext } from "../../Context/Filter_Context";
import ProductList from "./ProductList";


const Products = () => {
  const { isLoading, isError, products } = useProductContext();
  // const { filter_products, setGridView} = useFilterContext();
  // console.log(filter_products);

  if (isLoading) {
    return <div>......Loading</div>;
  }
  return (
    <>
      <Filter/>
      <ProductList/>
      {/* <div className="container my-5">
        <main className="grid">
          {products.map((curElem) => {
            return <Product key={curElem.pid} {...curElem} />;
          })}
        </main>
      </div> */}
    </>
  );
};

export default Products;
