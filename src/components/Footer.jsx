import React from "react";
import ScrollToTop from "./ScrollToTop";
import "../assets/styles/FeaturedNews.css";
// import facebookIcon from "../assets/images"; // تأكد من وضع المسار
// import twitterIcon from "../assets/images/WhatsApp Image 2024-08-25 at 19.18.39_1df191c9.jpg";
// import instagramIcon from "../assets/images/WhatsApp Image 2024-08-25 at 19.18.39_0df8b9bb.jpg"; // تأكد من وضع المسار الصحيح
// import linkedinIcon from "../assets/images/WhatsApp Image 2024-08-25 at 19.18.38_ed9b2f68.jpg"; // تأكد من وضع المسار الصحيح

function Footer() {
  return (
    <footer
      className="text-light   position-relative border border-dark border-start-0 border-bottom-0 border-end-0
      "
    >
      <ScrollToTop />
      <div className="footer-container ">
        <div className="footer-logo-section">
          <div className="footer-logo">
            <span>
              <img alt="Logo" />
            </span>
          </div>
          <p>SOFTWARE ENGINEERING FOR FUTURE</p>
        </div>

        <div className="footer-nav-section">
          <nav>
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">TECH</a>
              </li>
              <li>
                <a href="#">BUSINESS</a>
              </li>
              <li>
                <a href="#">SECURITY</a>
              </li>
              <li>
                <a href="#">MEDICAL</a>
              </li>
              <li>
                <a href="#">STARTUPS</a>
              </li>
              <li>
                <a href="#">APPS</a>
              </li>
              <li>
                <a href="#">COURSES</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
              <li>
                <a href="#">SPORTS</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-contact-section">
          <p>
            <a href="mailto:sefffuture@gmail.com">sefffuture@gmail.com</a>
          </p>
          <p>
            <a href="tel:+201098481283">+20 109 8481 283</a>
          </p>
          <p>
            <a href="tel:+201555177545">+20 155 5177 545</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          <a href="#" className="back-to-top">
            <img src={""} alt="Logo" />
          </a>
        </div>
        <div className="footer-links">
          <p>©2023 EGYPT, ALL RIGHTS RESERVED</p>
        </div>
        <div className="social-icons fs-1">
          <a href="#">
            <img src={""} alt="" />
          </a>
          <a href="#">
            <img src={""} alt="" />
          </a>
          <a href="#">
            <img src={""} alt="" />
          </a>
          <a href="#">
            <img src={""} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
