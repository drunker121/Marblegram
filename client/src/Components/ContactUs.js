import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { IoMdCall } from "react-icons/io";

const ContactUs = () => {
  return (
    <>
      <div className="aboutbg pt-5 pb-5 mb-3">
        <div className="pt-5 pb-5 align-items-center">
          <Link className="abtxt pt-5 pb-5">Contact Us</Link>
        </div>
      </div>

      <div className="cntbg">
        <div className="cntmarb d-flex">
          <div className="discuss">
            <h3>Let's discuss about your spaces!</h3>
            <br></br>
            <p>
              A descriptive paragraph that tells clients how good you are and
              proves that you are the best choice that they’ve made.
            </p>
            <br></br>
            <p>
              This paragraph is also for those who are looking out for a
              reliable interior design firm.
            </p>
            <br></br>
            <ol>
              <li>Free Consultation</li>
              <li>Budget Quotations</li>
              <li>Latest Technologies</li>
              <li>Eco Friendly Constructions</li>
            </ol>
          </div>
          <div className="getintouch">
            <form className="cntform p-5 m-5">
              <h3>Get in Touch</h3>
              <div>
                <label>Name:</label>
                <input></input>
              </div>
              <div>
                <label>Email:</label>
                <input></input>
              </div>
              <div>
                <label>Phone Number:</label>
                <input></input>
              </div>
              <div>
                <label>Your query:</label>
                <input></input>
              </div>
              <button className="btn btn-primary mt-2">Send</button>
            </form>
          </div>
        </div>
      </div>

      <div className="cntdet m-5 d-flex">
        <div className="cntleft">
          <h3>Contact Details</h3>
          <br></br>
          <small>
            You can use a few enticing words and flaunt your capabilities that
            will attract future clients and encourage them to hire you right
            away.
          </small>
        </div>
        <div className="socialLinks p-5">
          <ul>
            <li>
              <Link to="/">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-google-plus-g"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container2 mb-3 gap-5">
        <div className="card2">
          <div className="card2-side card2-side-front"><MdLocationOn/></div>
          <div className="d-flex flex-column card2-side card2-side-back">
          <div><h3>Address</h3></div>
          <div className="text-center"><small>1, Rahimpura, landmark : Bala G Granite, Kishangarh, Rajasthan 305801</small></div>
          </div>
        </div>
        <div className="card2">
          <div className="card2-side card2-side-front"><TfiEmail/></div>
          <div className="d-flex flex-column card2-side card2-side-back">
          <div><h3>Email Us</h3></div>
          <div><small>marblegram@gmail.com</small></div>
          </div>
        </div>
        <div className="card2">
          <div className="card2-side card2-side-front"><IoMdCall/></div>
          <div className="d-flex flex-column card2-side card2-side-back">
          <div><h3>Call Us</h3></div>
          <div><small>+9195090-71607</small></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
