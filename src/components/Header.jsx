import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/images/seff_logo_transparent.png";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({
    tech: false,
    courses: false,
  });

  // Array of navigation links
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    {
      label: "Tech",
      path: "/tech",
      subLinks: [
        { label: "Laptops", path: "/tech/laptops" },
        { label: "Phones", path: "/tech/phones" },
        { label: "Tablets", path: "/tech/tablets" },
      ],
    },
    { label: "Business", path: "/business-news" },
    { label: "Sports", path: "/sports" },
    { label: "Medical", path: "/medical" },
    { label: "Startups", path: "/startups" },
    { label: "Apps", path: "/apps" },
    {
      label: "Courses",
      path: "/courses",
      subLinks: [
        { label: "Python", path: "/courses/python" },
        { label: "Java", path: "/courses/java" },
        { label: "JavaScript", path: "/courses/javascript" },
        { label: "CSS", path: "/courses/css" },
        { label: "HTML", path: "/courses/html" },
      ],
    },
    { label: "Jobs", path: "/jobs" },
    { label: "Contact Us", path: "/contact", isButton: true },
  ];

  const handleMenuToggle = (setter) => () => {
    setter((prev) => !prev);
  };

  const handleSubMenuToggle = (menu) => {
    setIsSubMenuOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };
const navigate = useNavigate()
  return (
    <nav className="px-2 px-lg-5 py-1 py-lg-3 text-light d-flex justify-content-between user-select-none align-items-center">
      {/* Logo Section */}
      <div>
        <img src={logoImg} alt="Logo" className="header-logo" />
      </div>

      {/* Desktop Menu */}
      <div className="d-none flex-column d-xl-flex">
        {/* User Actions */}
        <div>
          <ul className="d-flex align-content-end justify-content-end list-unstyled">
            <li>
              <Link className="btn text-light" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Navigation */}
        <div className="d-flex">
          <ul className="d-flex align-items-center list-unstyled gap-3">
            {navLinks.map((link) =>
              link.subLinks ? (
                <li key={link.label} className="position-relative">
                  <span
                    onMouseOver={() =>
                      handleSubMenuToggle(link.label.toLowerCase())
                    }
                    onMouseLeave={() =>
                      handleSubMenuToggle(link.label.toLowerCase())
                    }
                    onClick={()=>navigate(`${link.path}`)}
                  >
                    {link.label}
                  </span>
                  <ul
                    className={`list-unstyled position-absolute ${
                      isSubMenuOpen[link.label.toLowerCase()]
                        ? ""
                        : "visually-hidden"
                    }`}
                  >
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.path}>
                        <Link to={subLink.path}>{subLink.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.path}>
                  {link.isButton ? (
                    <Link to={link.path} className="btn btn-outline-warning">
                      {link.label}
                    </Link>
                  ) : (
                    <Link to={link.path}>{link.label}</Link>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div
        className="d-flex align-items-center d-xl-none me-3"
        onClick={handleMenuToggle(setIsMobileMenuOpen)}
      >
        <span className="btn border-0 text-light header-mobile-menu-btn">
          {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
        </span>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-nav-menu w-75 w-md-50 ${
          isMobileMenuOpen ? "d-block" : "d-none"
        }`}
      >
        {/* Close Button */}
        <div
          className="d-flex justify-content-end mt-4"
          onClick={handleMenuToggle(setIsMobileMenuOpen)}
        >
          <IoClose className="fs-1 btn-danger" />
        </div>

        {/* Mobile Navigation List */}
        <ul className="list-unstyled d-flex flex-column gap-3 fs-3">
          {navLinks.map((link) =>
            link.subLinks ? (
              <li
                key={link.label}
                onClick={() => handleSubMenuToggle(link.label.toLowerCase())}
              >
                <span>{link.label}</span>
                <ul
                  className={`list-unstyled fs-3 ps-4 ${
                    isSubMenuOpen[link.label.toLowerCase()]
                      ? "d-block"
                      : "d-none"
                  }`}
                >
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.path}>
                      <Link
                        to={subLink.path}
                        onClick={handleMenuToggle(setIsMobileMenuOpen)}
                      >
                        {subLink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={handleMenuToggle(setIsMobileMenuOpen)}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Login Button */}
        <div className="gap-3 fs-5 btn btn-light">
          <Link to="/login" onClick={handleMenuToggle(setIsMobileMenuOpen)}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
