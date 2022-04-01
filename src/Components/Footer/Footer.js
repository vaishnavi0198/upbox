import React from "react";
import './footer.css';
import logo from './Logo.png'

function footer() {
  return (
    <div className='footer-wrap'>
        <div className="footer">
      <div className="footer-header">
          <div className="logo">
          <img src={logo} alt=""  className="upbox-logo-img" />
          <span className="footer-logo">UPBOX</span>
            </div>
          <div className="footer-social">
              <div className="ig"></div>
              <div className="fb"></div>
              <div className="tw"></div>
              <div className="sc"></div>
          </div>
      </div>
      <div className="footer-content">
        <div className="list">
          <h4>UPBOX</h4>
          <ul>
            <li>
              <a href="#">Upbox Bag</a>
            </li>
            <li>
              <a href="#">Upbox Box Platinum</a>
            </li>
            <li>
              <a href="#">Upbox Box VIP</a>
            </li>
            <li>
              <a href="#">Deals</a>
            </li>
            <li>
              <a href="#">Seasonal Items</a>
            </li>
            <li>
              <a href="#">Upbox Promise</a>
            </li>
          </ul>
        </div>

        <div className="list">
          <h4>Find Us On</h4>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Tik Tok</a>
            </li>
            <li>
              <a href="#">Snapchat</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>

        <div className="list">
          <h4>Product</h4>
          <ul>
            <li>
              <a href="#">Get the App</a>
            </li>
            <li>
              <a href="#">Loyalty Program</a>
            </li>
            <li>
              <a href="#">Affiliates</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </div>

        <div className="list">
          <h4>Help</h4>
          <ul>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Videos</a>
            </li>
          </ul>
        </div>
      </div>
         <div className="footer-end">
        <div className="footer-end1">
          &#169; 2020 Quest AI. Upbox is a Sample Project and open source design
          project free for personal and commercial use.
        </div>
        <div className="flexterms">
          <div className="terms">Terms</div>
        <div className='privacy'>Privacy Policy</div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default footer;
