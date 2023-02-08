// import { Cursor } from 'mongoose';
import React from "react";
import { useProductContext } from "../Context/ProductContext";
import Product from "./Product";
import Filter from "./Filter";
import { MdLocationOn, MdSearch, MdCategory } from "react-icons/md";
import { FaHome, FaRupeeSign } from "react-icons/fa";

const Products = () => {
  const { isLoading, isError, products } = useProductContext();

  if (isLoading) {
    return <div>......Loading</div>;
  }
  return (
    <>
      <Filter/>      
      <div className="container">
        <main className="grid">
          {products.map((curElem) => {
            return <Product key={curElem.pid} {...curElem} />;
          })}
        </main>
      </div>
    </>
  );
};

export default Products;
