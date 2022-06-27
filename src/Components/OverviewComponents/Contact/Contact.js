import React from "react";
import contactImg from "../../../Assets/contact-us.png";

const Contact = () => {
  return (
    <div className="contact-us">
      <div className="main-title">
        <h2>Contact IR</h2>
      </div>

      <img className="img-fluid" src={contactImg} alt="Contact-Img" />
    </div>
  );
};

export default Contact;
