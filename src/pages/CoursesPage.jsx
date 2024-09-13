import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useFormattedDate from "../hooks/useFormattedDate";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  const newCourses = [
    {
      title: "Python for Beginners",
      instructor: "Mohammed Nour",
      date: "Wednesday, June 7th",
      lessons: 12,
    },
    {
      title: "Python for Beginners",
      instructor: "Mohammed Nour",
      date: "Wednesday, June 7th",
      lessons: 12,
    },
    {
      title: "Python for Beginners",
      instructor: "Mohammed Nour",
      date: "Wednesday, June 7th",
      lessons: 12,
    },
    {
      title: "Python for Beginners",
      instructor: "Mohammed Nour",
      date: "Wednesday, June 7th",
      lessons: 12,
    },
  ];

  const otherCourses = [
    {
      title: "HTML Basics",
      instructor: "Mohammed Nour",
      date: "Thursday, June 8th",
      lessons: 12,
      level: 1,
    },
    {
      title: "Graphic Design",
      instructor: "Mohammed Nour",
      date: "Thursday, June 8th",
      lessons: 17,
      level: 1,
    },
    {
      title: "UI UX Design",
      instructor: "Mohammed Nour",
      date: "Thursday, June 8th",
      lessons: 12,
      level: 1,
    },
    {
      title: "HTML Basics",
      instructor: "Mohammed Nour",
      date: "Thursday, June 8th",
      lessons: 12,
      level: 1,
    },
    {
      title: "Graphic Design",
      instructor: "Mohammed Nour",
      date: "Thursday, June 8th",
      lessons: 17,
      level: 1,
    },
    {
      title: "UI UX Design",
      instructor: "Mohammed Nour",
      date: "Thursday, June 8th",
      lessons: 12,
      level: 1,
    },
  ];

  const date = useFormattedDate();

  return (
    <div className="">
      <div>
        <h2 className="page-title">Courses</h2>
        <p>{date}</p>
      </div>

      {/*  Courses Section */}
      {/* New Courses Section */}
      <div className="my-4">
        <div>
          <h3 className="page-titl">New Courses</h3>
        </div>
        <div
          className="d-grid gap-2"
          style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {newCourses.map((course, index) => (
            <div className="bg-black px-2" key={index}>
              <div className="card bg-dark text-white">
                <img
                  src="path_to_image"
                  className="card-img-top"
                  alt={course.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">
                    Instructor: <strong>{course.instructor}</strong>
                    <br />
                    {course.date}
                    <br />
                    {course.lessons} lessons
                  </p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-warning">Enroll</button>
                    <Link href="#" className="btn btn-link text-white">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  Courses Section */}
      <div className="mt-5">
        <div className="d-flex justify-content-between">
          <h3>Other Courses</h3>
          <div>SEARCH</div>
        </div>
        <div
          className=" d-grid justify-content-between align-items-center bg-black"
          style={{ gridTemplateColumns: "2fr 7fr 1fr 1fr 1fr" }}
        >
          <div></div>
          <div></div>
          <div className="text-start">Start Date</div>
          <div className="ps-5">Level</div>
          <div className=""></div>
        </div>
        <div className="d-flex flex-column ">
          {otherCourses.map((course, index) => (
            <div
              className=" d-grid justify-content-between align-items-center bg-black p-3"
              style={{ gridTemplateColumns: "2fr 7fr 1fr 1fr 1fr" }}
              key={index}
            >
              <div>
                <img
                  src="path_to_image"
                  className="card-img-top"
                  alt={course.title}
                />
              </div>

              <div>
                <h5 className="mb-1">{course.title}</h5>
                <p className="mb-1">
                  Instructor: <strong>{course.instructor}</strong>
                  <p>{course.lessons} lessons</p>
                </p>
              </div>
              <div className="text-center">{course.date}</div>

              <div className="text-center"> {course.level}</div>
              <div className="d-flex align-items-center gap-4 justify-content-center">
                <div className="d-flex flex-column">
                  <button className="btn btn-warning me-2">Enroll</button>
                  <Link href="#" className="btn btn-link text-warning">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination (Sample) */}
      <nav aria-label="Course Pagination ">
        <ul className="pagination justify-content-end">
          <li className="page-item">
            <Link className="page-link" href="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              3
            </Link>
          </li>
          <li className="page-item disabled">
            <Link className="page-link" href="#">
              ...
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CoursesPage;
