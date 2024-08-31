import React from "react";
import ScrollToTop from "./ScrollToTop";
import "../assets/styles/FeaturedNews.css";
import { Link } from "react-router-dom";
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
                <Link href="#">HOME</Link>
              </li>
              <li>
                <Link href="#">ABOUT</Link>
              </li>
              <li>
                <Link href="#">TECH</Link>
              </li>
              <li>
                <Link href="#">BUSINESS</Link>
              </li>
              <li>
                <Link href="#">SECURITY</Link>
              </li>
              <li>
                <Link href="#">MEDICAL</Link>
              </li>
              <li>
                <Link href="#">STARTUPS</Link>
              </li>
              <li>
                <Link href="#">APPS</Link>
              </li>
              <li>
                <Link href="#">COURSES</Link>
              </li>
              <li>
                <Link href="#">CONTACT US</Link>
              </li>
              <li>
                <Link href="#">SPORTS</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-contact-section">
          <p>
            <Link href="mailto:sefffuture@gmail.com">sefffuture@gmail.com</Link>
          </p>
          <p>
            <Link href="tel:+201098481283">+20 109 8481 283</Link>
          </p>
          <p>
            <Link href="tel:+201555177545">+20 155 5177 545</Link>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          <Link href="#" className="back-to-top">
            <img src={""} alt="Logo" />
          </Link>
        </div>
        <div className="footer-links">
          <p>©2023 EGYPT, ALL RIGHTS RESERVED</p>
        </div>
        <div className="social-icons fs-1">
          <Link href="#">
            <img src={""} alt="" />
          </Link>
          <Link href="#">
            <img src={""} alt="" />
          </Link>
          <Link href="#">
            <img src={""} alt="" />
          </Link>
          <Link href="#">
            <img src={""} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
