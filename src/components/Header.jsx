import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/images/seff_logo_transparent.png";
import { IoMenu, IoClose } from "react-icons/io5";
function Header() {
  const [isTechMenuOpen, setIsTechMenuOpen] = useState(false);
  const [isCoursesMenuOpen, setIsCoursesMenuOpen] = useState(false);

  const handleTechMenu = () => {
    setIsTechMenuOpen(!isTechMenuOpen);
  };

  const handleCoursesMenu = () => {
    setIsCoursesMenuOpen(!isCoursesMenuOpen);
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [isTechSubMenuOpen, setIsTechSubMenuOpen] = useState(false);
  const handleTechSubMenu = (e) => {
    setIsTechSubMenuOpen(!isTechSubMenuOpen);
  };

  const [isCoursesSubMenuOpen, setIsCoursesSubMenuOpen] = useState(false);
  const handleCoursesSubMenu = (e) => {
    setIsCoursesSubMenuOpen(!isCoursesSubMenuOpen);
  };

  return (
    <nav className="px-2 px-lg-5 py-1 py-lg-3 text-light d-flex justify-content-between user-select-none align-items-center">
      <div>
        <img src={logoImg} alt="" className="header-logo" />
      </div>
      <div className="d-none flex-column d-xl-flex ">
        <div>
          <ul className="d-flex align-content-end justify-content-end list-unstyled">
            <li>
              <Link className="btn text-light" to={"/login"}>
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex ">
          <ul className="d-flex align-items-center list-unstyled gap-3">
            <li>Home</li>
            <li>About</li>
            <li className=" position-relative">
              <span onClick={handleTechMenu}>Tech </span>
              <ul
                className={`list-unstyled position-absolute  ${
                  isTechMenuOpen ? "" : "visually-hidden"
                }`}
              >
                <li>Laptops</li>
                <li>Phones</li>
                <li>Tablets</li>
              </ul>
            </li>
            <li>Business</li>
            <li>Sports</li>
            <li>Medical</li>
            <li>Startups</li>
            <li>Apps</li>
            <li className=" position-relative">
              <span onClick={handleCoursesMenu}>Courses </span>
              <ul
                className={`list-unstyled position-absolute ${
                  isCoursesMenuOpen ? "" : "visually-hidden"
                }`}
              >
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </li>
            <li>Jobs</li>
            <li className="btn btn-outline-warning">Contact Us</li>
          </ul>
        </div>
      </div>
      <div
        className="d-flex align-items-center d-xl-none me-3"
        onClick={handleMobileMenu}
      >
        <span className="btn btn-warning text-light">
          <IoMenu />
        </span>
      </div>

      <div
        className={`mobile-nav-menu ${isMobileMenuOpen ? "d-block" : "d-none"}`}
      >
        <div
          className="d-flex justify-content-end mt-4"
          onClick={handleMobileMenu}
        >
          <IoClose className="fs-1 btn-danger" />
        </div>
        <ul className="list-unstyled d-flex flex-column gap-3 fs-1">
          <li>Home</li>
          <li>About</li>
          <li onClick={handleTechSubMenu}>
            <span>Tech</span>
            <ul
              className={`list-unstyled fs-3 ${
                isTechSubMenuOpen ? "d-block" : "d-none"
              }`}
            >
              <li>Laptops</li>
              <li>Phones</li>
              <li>Tablets</li>
            </ul>
          </li>
          <li>Business</li>
          <li>Sports</li>
          <li>Medical</li>
          <li>Startups</li>
          <li>Apps</li>
          <li onClick={handleCoursesSubMenu}>
            <span>Courses</span>
            <ul
              className={`list-unstyled fs-3 ${
                isCoursesSubMenuOpen ? "d-block" : "d-none"
              }`}
            >
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </li>
          <li>Jobs</li>
          <li>Contact Us</li>
        </ul>
        <div className=" gap-3 fs-1 btn btn-light ">
          <span>login</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
