import React from "react";
import { Link } from "react-router-dom";
import './Product.css';
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, price, Category, property_type, city, image } = curElem;
  return (
    <>
      {/* <Link to={`/singleproduct/${id}`}>
    <div className="card">
        <img className="card-img-top" src={image} alt={name}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
          <p>{Category}</p>
          <p>{city}</p>
          <p>{property_type}</p>
        </div>
    </div>
    </Link> */}

      <Link to={`/singleproduct/${id}`}>
        <div id="toast"></div>
        <div id="toast-cart"></div>
        <div className="container">
          <br></br>
          <hr />
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <img
                  src={image}
                  className="first-image"
                />
                <div className="card-body">
                  <a href="#" onclick="addCart()">
                    <center>Add to Enquiry</center>
                  </a>
                  <hr />
                  <center>
                    <h5 className="card-title">{name}</h5>
                  </center>
                  <center>
                    <h5 className="card-title"><FormatPrice price = {price}/></h5>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
