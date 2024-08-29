import React, { useState } from "react";
import LoginModel from "./ui/LoginModel";

function Header() {
  const [isTechMenuOpen, setIsTechMenuOpen] = useState(false);
  const [isCoursesMenuOpen, setIsCoursesMenuOpen] = useState(false);

  const handleTechMenu = () => {
    setIsTechMenuOpen(!isTechMenuOpen);
  };

  const handleCoursesMenu = () => {
    setIsCoursesMenuOpen(!isCoursesMenuOpen);
  };

  return (
    <nav className=" conainer px-5 py-3 text-light d-flex justify-content-between">
      <div>LOGO</div>
      <div className="d-none flex-column d-xl-flex ">
        <div>
          <ul className="d-flex align-content-end justify-content-end list-unstyled">
            <li>
              <button
                className="btn"
                onClick={() => {
                  return <LoginModel value="open" />;
                }}
              >
                Login
              </button>
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
    </nav>
  );
}

export default Header;
