import React from 'react'
import { useCartContext } from '../Context/Cart_Context';
import './Cart.css'

const Enquiry = () => {

  const {cart} = useCartContext();
  console.log(cart);

  return (
    <>

        <div className='container p-5'>

        {/* <section className="mt-5">
          <div className="container">
              <div className="cart">
              <div className="table-responsive">
                  <table className="table">
                      <thead className="thead-dark">
                          <tr>
                              <th scope="col"className="text-white bg-black">Product</th>
                              <th scope="col"className="text-white bg-black">Price</th>
                              <th scope="col"className="text-white bg-black">Your Message</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>
                                  <div className="main">
                                      <div className="d-flex">
                                       <img src="images/cart-1.jpg"alt=""/>
                                      </div>
                                      <div className="des">
                                          <p>lorem ipsum</p>
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <h6>$20.00</h6>
                              </td>
                              <td>
                                  <h6>$20.00</h6>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              </div>
          </div>
      </section> */}

            <div className='d-flex flex-column gap-4 p-5 m-5'>
                <input placeholder='NAME'></input>
                <input placeholder='EMAIL'></input>
                <input placeholder='SUBJECT'></input>
                <input placeholder='PHONE NUMBER'></input>
                <textarea placeholder='YOUR MESSAGE'></textarea>
                <button type="button" className="btn btn-info">Send Message</button>
            </div>
        </div>
    </>
  )
}

export default Enquiry