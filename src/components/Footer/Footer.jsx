import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <h1>About</h1>
            <p>
              Welcome to FashionHub, your go-to destination for stylish clothing, trendy 
              accessories, and fashionable shoes. Discover an extensive collection of 
              apparel for all ages, curated to keep you in vogue. Shop with confidence 
              and elevate your fashion game with us.
            </p>
          </div>
          <div className="item">
            <h1>Contact</h1>
            <p>
              Have a question, comment, or feedback? Reach out to our 
              friendly customer support team via phone or email. Our dedicated staff is 
              ready to assist you with any inquiries. Stay connected with FashionHub and let us enhance your shopping 
              experience.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">FashionHub</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;