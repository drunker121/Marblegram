import React from "react";
import { Form, Link } from "react-router-dom";
import './Product.css';
import FormatPrice from "../../Helpers/FormatPrice";
import { useProductContext } from "../../Context/ProductContext";


const Product = (curElem) => {
  const {pid, name, price, Category, property_type, city, image } = curElem;
  const { isLoading, isError, products } = useProductContext();

  return (
    <>
      <Link to={`/singleproduct/${pid}`}>
        <img className="proimg" src={image} alt="Sample photo"/>
        <div className="text">
          <h3>{name}</h3>
          <del><p><FormatPrice price={price + 200}/></p></del>
          <p><FormatPrice price={price}/></p>
          <Link to="/" className="btn btn-primary btn-block">Add to Enquiry</Link>
        </div>
      </Link>
    </>
  );
};

export default Product;
