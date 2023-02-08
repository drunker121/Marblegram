import React, { useEffect } from "react";
import "./Single.css";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";
import FormatPrice from "../Helpers/FormatPrice";

const API = "https://gleaming-pink-stole.cyclic.app/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();
  //   console.log(id);
  const {
    id: alias,
    pid,
    name,
    price,
    city,
    Category,
    property_type,
    image,
  } = singleProduct;
  //   console.log(name);
  console.log(singleProduct);

  useEffect(() => {
    getSingleProduct(`${API}?pid=${id}`);
  }, []);

  if(isSingleLoading){
    return <div>...Loading</div>
  }

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img
              className="img-fluid details-img"
              src={singleProduct[0].image}
              alt=""
            />
          </div>
          <div className="col-md-6 col-sm-12 description-container">
            <div className="main-description">
              <p className="product-category mb-0">{singleProduct[0].Category}</p>
              <h3>{singleProduct[0].name}</h3>
              <p><del><FormatPrice price={singleProduct[0].price +200 }/></del></p>
              <p className="product-price"><FormatPrice price={singleProduct[0].price}/></p>

              <p className="product-title mt-4 mb-1">Cities:</p>
              <p className="product-description mb-4">
                {singleProduct[0].city}
              </p>

              <p className="product-title mt-4 mb-1">Property Type:</p>
              <p className="product-description mb-4">
                {singleProduct[0].property_type}
              </p>

              <form className="add-inputs" method="post">
                <button
                  name="add_to_cart"
                  type="submit"
                  className="btn btn-primary btn-lg"
                >
                  Add to Enquiry
                </button>
              </form>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
