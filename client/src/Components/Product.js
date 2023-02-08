import React from "react";
import { Form, Link } from "react-router-dom";
import './Product.css';
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { _id,pid, name, price, Category, property_type, city, image } = curElem;
  return (
    <>
          {/* <Link to={`/singleproduct/${pid}`}>
            <div id="toast"></div>
            <div id="toast-cart"></div>
            <div className="container">
              <br></br>
              <div className="row">
                <div className="col-lg-4">
                  <div className="cardp">
                    <img
                      src={image}
                      className="first-image"
                    />
                    <div className="card-body">
                      <Link to="/" onclick="">
                        <center>Add to Enquiry</center>
                      </Link>
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
          </Link> */}
          <Link to={`/singleproduct/${pid}`}>
      <img className="proimg" src={image} alt="Sample photo"/>
      <div class="text">
        <h3>{name}</h3>
        <del><p><FormatPrice price={price + 200}/></p></del>
        <p><FormatPrice price={price}/></p>
        <a href="https://codepen.io/collection/XdWJOQ/" class="btn btn-primary btn-block">Add to Enquiry</a>
      </div>
    </Link>
    </>
  );
};

export default Product;
