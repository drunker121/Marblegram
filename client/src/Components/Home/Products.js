import React from 'react';
import './Products.css';


const Products = () => {
  return (
    <>
        <div className="marbanime text-bold mt-5 text-center">
          [ M A R B L E G R A M ]
        </div>

        <div className="our text-center mt-2">
          <h1>Product Categories</h1>
        </div>
        
        <div>element divider</div>

        <div>
        <section className="section-1">
            <div className="row">
                <figure className="figure">
                <img src="https://images.pexels.com/photos/2825578/pexels-photo-2825578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                <figcaption>
                    <h3>Buy Now</h3>
                </figcaption>
                <a href="#"></a>
                </figure>
                <figure className="figure">
                <img src="https://images.pexels.com/photos/1918246/pexels-photo-1918246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                <figcaption>
                    <h3>Read More</h3>
                </figcaption>
                <a href="#"></a>
                </figure>
                <figure className="figure">
                <img src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                <figcaption>
                    <h3>Join Us</h3>
                </figcaption>
                <a href="#"></a>
                </figure>
            </div>
        </section>




{/* <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script> */}

        </div>
    </>
  )
}

export default Products