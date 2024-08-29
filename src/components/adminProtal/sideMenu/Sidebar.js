import React, { useState } from "react";
import { Link } from "react-router-dom";
import AsideLinks from "./AsideLinks";
import "./sidebar.css";
import useFormattedDate from "../../../hooks/useFormattedDate";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (item) => {
    setActiveLink(item);
  };

  const UsersLinks = [
    { id: 1, title: "Editors", path: "/adminportal/editors" },
    { id: 2, title: "Admins", path: "/adminportal/admins" },
    { id: 3, title: "Students", path: "/adminportal/students" },
    { id: 4, title: "Instructors", path: "/adminportal/instructors" },
  ];

  const ArticlesLinks = [
    {
      id: 5,
      title: "Published Articles",
      path: "/adminportal/articles",
    },
    {
      id: 6,
      title: "Scheduled Articles",
      path: "/adminportal/scheduled-articles",
    },
    { id: 7, title: "Saved Drafts", path: "/adminportal/saved-drafts" },
  ];

  const JobsLinks = [
    { id: 8, title: "Published Jobs", path: "jobs" },
    { id: 9, title: "Saved Drafts", path: "/adminportal/jobs-saved-drafts" },
  ];

  const CoursesLinks = [
    {
      id: 10,
      title: "Published Courses",
      path: "/adminportal/published-courses",
    },
    {
      id: 11,
      title: "Scheduled Courses",
      path: "/adminportal/scheduled-courses",
    },
    {
      id: 12,
      title: "Saved Drafts",
      path: "/adminportal/courses-saved-drafts",
    },
  ];
  const date = useFormattedDate();
  return (
    <div className="">
      <div className=" h6 text-light d-flex flex-column gap-2">
        <span className="page-title">Admin Portal</span>
        <span>{date}</span>
      </div>
      <nav className="d-none d-lg-block">
        <ul>
          <li>
            <strong className="w-100 d-block p-2 strongs">Users</strong>
            <ul className="ps-4 my-4 ul-inner">
              {UsersLinks.map((link) => (
                <AsideLinks
                  key={link.id}
                  id={link.id}
                  title={link.title}
                  path={link.path}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              ))}
            </ul>
          </li>
          <li>
            <strong className="w-100 d-block p-2 strongs">Articles</strong>
            <ul className="ps-4 my-4 ul-inner">
              {ArticlesLinks.map((link) => (
                <AsideLinks
                  key={link.id}
                  id={link.id}
                  title={link.title}
                  path={link.path}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              ))}
            </ul>
          </li>
          <li>
            <strong className="w-100 d-block p-2 strongs">Jobs</strong>
            <ul className="ps-4 my-4 ul-inner">
              {JobsLinks.map((link) => (
                <AsideLinks
                  key={link.id}
                  id={link.id}
                  title={link.title}
                  path={link.path}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              ))}
            </ul>
          </li>
          <li>
            <strong className="w-100 d-block p-2 pb-0 strongs">Courses</strong>
            <ul className="ps-4 mt-4 ul-inner">
              {CoursesLinks.map((link) => (
                <AsideLinks
                  key={link.id}
                  id={link.id}
                  title={link.title}
                  path={link.path}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              ))}
            </ul>
          </li>
        </ul>
      </nav>

      {/* Mobile version navigation */}
      <nav className="d-flex d-lg-none bg-transparent   ">
        <ul className=" ul-mobile">
          <li>
            <Link
              onClick={() => handleLinkClick("Users")}
              className={activeLink === "Users" ? "activeA" : ""}
              to="#"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleLinkClick("Articles")}
              className={activeLink === "Articles" ? "activeA" : ""}
              to="#"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleLinkClick("Jobs")}
              className={activeLink === "Jobs" ? "activeA" : ""}
              to="#"
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleLinkClick("Courses")}
              className={activeLink === "Courses" ? "activeA" : ""}
              to="#"
            >
              Courses
            </Link>
          </li>
        </ul>
      </nav>

      <div className="d-block d-lg-none mb-5">
        {activeLink !== "" && (
          <select className="form-select select-mob">
            {activeLink === "Users" &&
              UsersLinks.map((link) => (
                <option key={link.id} value={link.path}>
                  {link.title}
                </option>
              ))}
            {activeLink === "Articles" &&
              ArticlesLinks.map((link) => (
                <option key={link.id} value={link.path}>
                  {link.title}
                </option>
              ))}
            {activeLink === "Jobs" &&
              JobsLinks.map((link) => (
                <option key={link.id} value={link.path}>
                  {link.title}
                </option>
              ))}
            {activeLink === "Courses" &&
              CoursesLinks.map((link) => (
                <option key={link.id} value={link.path}>
                  {link.title}
                </option>
              ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
