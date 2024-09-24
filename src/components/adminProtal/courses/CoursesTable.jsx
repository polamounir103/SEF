import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./CoursesTable.css";
import { ImSearch } from "react-icons/im";
import { FaRegPenToSquare, FaTrashCan } from "react-icons/fa6";
import Title from "../articlesComponents/title";
import { FaSearch } from "react-icons/fa";

// Example CourseCard component
function CourseCard({
  courseName,
  level,
  lessons,
  language,
  startDate,
  duration,
  publishedOn,
  status,
}) {
  return (
    <div className="mobile mx-auto row mt-5 bg-black rounded-3">
      <div className="col-9 text-light fw-bolder fs-5 mt-3">Course Name</div>
      <div className="col-3">
        <button className="btn btn-warning mt-3 w-100">{status}</button>
      </div>
      <div className="col-12 text-light fw-bolder fs-4 mt-3">{courseName}</div>
      <div className="col-6 text-light fw-bolder fs-5 mt-3">Level</div>
      <div className="col-6 text-light fw-bolder fs-5 mt-3">
        Number of Lessons
      </div>
      <div className="col-6 text-light fw-bolder fs-6 mt-3">{level}</div>
      <div className="col-6 text-light fw-bolder fs-6 mt-3">{lessons}</div>
      <div className="col-6 text-light fw-bolder fs-5 mt-3">Language</div>
      <div className="col-6 text-light fw-bolder fs-5 mt-3">Start Date</div>
      <div className="col-6 text-light fw-bolder fs-6 mt-3">{language}</div>
      <div className="col-6 text-light fw-bolder fs-6 mt-3">{startDate}</div>
      <div className="col-6 text-light fw-bolder fs-5 mt-3">Duration</div>
      <div className="col-6 text-light fw-bolder fs-5 mt-3">Published On</div>
      <div className="col-6 text-light fw-bolder fs-6 mt-3">{duration}</div>
      <div className="col-6 text-light fw-bolder fs-6 mt-3">{publishedOn}</div>
      <div className="col-8 text-light fw-bolder fs-5 mt-3"></div>
      <div className="d-flex justify-content-end gap-3 p-3 fs-2 ">
        <Link className="text-warning">
          <FaRegPenToSquare />
        </Link>
        <Link className="text-warning ml-3">
          <FaTrashCan/>
        </Link>
      </div>
    </div>
  );
}

function CoursesTable() {
  const [searchTerm, setSearchTerm] = useState("");

  // Array of course objects
  const courses = [
    {
      courseName: "React Beginners Course",
      level: "1",
      lessons: "20",
      language: "Arabic",
      startDate: "6th June 2023",
      duration: "1 month",
      publishedOn: "4th June 2023",
      status: "Ongoing",
    },
    {
      courseName: "React Advanced Course",
      level: "2",
      lessons: "30",
      language: "English",
      startDate: "1st July 2023",
      duration: "2 months",
      publishedOn: "30th June 2023",
      status: "Ended",
    },
    // Add more courses as needed
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtered courses based on search term
  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="w-100 row col-lg-9 ww d-xl-none d-flex m-auto d-flex-column justify-content-center align-items-center">
        {/* Mobile view */}
        {filteredCourses.map((course, index) => (
          <>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <Title title="All Courses" />
              <div className=" position-relative text-danger search-box ">
                <input
                  type="text"
                  className="article-search-input"
                  placeholder="search all"
                />
                <div className="article-search-icon">
                  <FaSearch />
                </div>
              </div>
            </div>
            <CourseCard key={index} {...course} />
          </>
        ))}

        <button className="btn btn-warning col-12 p-4 ss mt-5 text-light fw-bolder fs-4">
          Create New Course
        </button>
      </div>
      {/* Desktop view */}
      <div className=" w-100 row col-lg-9 ww d-none d-xl-flex ">
        <div className="col-lg-12 bg-opacity-25 text-white fw-bolder text-end  mt-3">
          <Link className="btn btn-warning text-light">Create New Courses</Link>
        </div>

        {/* <div className="col-lg-8 text-white fw-bolder text-start bg-opacity-25 p-3 mt-3">
          Courses <hr className="w-25 text-warning" />
        </div>
        <div className="col-lg-4 bg-opacity-25 text-white fw-bolder p-3 mt-3 ">
          <div className="input-search-box">
            <input
              type="text"
              className="p-2 bg-light bg-opacity-25 "
              placeholder="Search in Courses"
              value={searchTerm}
              onChange={handleSearchChange}
              />
            <span className="input-group-text bg-light bg-opacity-25 ">
              <ImSearch />
            </span>
          </div>
        </div> */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <Title title="All Courses" />
          <div className=" position-relative text-danger search-box ">
            <input
              type="text"
              className="article-search-input"
              placeholder="search all"
              onChange={handleSearchChange}
            />
            <div className="article-search-icon">
              <FaSearch />
            </div>
          </div>
        </div>

        {/* Table Headers */}
        <div className="col-lg-2 text-white fw-bolder p-3 mt-3 ">Title</div>
        <div className="col-lg-2 text-white fw-bolder p-3 mt-3 ">Status</div>
        <div className="col-lg-2 text-white fw-bolder p-3 mt-3 ">
          Instructor
        </div>
        <div className="col-lg-1 text-white fw-bolder p-3 mt-3 ">Level</div>
        <div className="col-lg-2 text-white fw-bolder p-3 mt-3 ">
          Start Date
        </div>
        <div className="col-lg-3 text-white fw-bolder p-3 mt-3 ">
          Published On
        </div>

        {/* Table Content */}
        {filteredCourses.map((course, index) => (
          <Fragment key={index}>
            <div className="row ">
              <div className="col-lg-2 text-white p-3 mt-3">
                {course.courseName}
              </div>
              <div className="col-lg-2 text-white p-3 mt-3">
                <button className="btn btn-warning fw-bolder btt">
                  {course.status}
                </button>
              </div>
              <div className="col-lg-2 text-white p-3 mt-3">Mohamed Ali</div>
              <div className="col-lg-1 text-white p-3 mt-3 text-center">
                {course.level}
              </div>
              <div className="col-lg-2 text-white p-3 mt-3">
                {course.startDate}
              </div>
              <div className="col-lg-2 text-white p-3 mt-3">
                {course.publishedOn}
              </div>
              <div className="col-lg-1 text-white p-3 mt-3">
                <Link
                  className="text-warning"
                  href="#"
                  aria-label="Edit or Delete"
                >
                  <FaRegPenToSquare aria-hidden="true" />
                  <FaTrashCan aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Fragment>
        ))}

        <div className="col-lg-8 text-white fw-bolder p-3 mt-3 "></div>
        <div className="col-lg-4 text-white fw-bolder text-end p-3 mt-3">
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link text-warning border-warning" to="#">
                Previous
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link text-warning border-warning" to="/">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link text-warning border-warning"
                to="/JOPFORM"
              >
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link text-warning border-warning" to="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link text-warning border-warning" to="#">
                Next
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CoursesTable;
