import React from "react";
import { FaRegPenToSquare, FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CourseRow({ course }) {
  return (
    <>
      <div className="col-lg-2 bg-dark text-white rounded p-3 mt-3">
        {course.courseName}
      </div>
      <div className="col-lg-2 bg-dark text-white rounded p-3 mt-3">
        <button
          className={`btn btn-${
            course.status === "Ongoing" ? "warning" : "secondary"
          } fw-bolder`}
        >
          {course.status}
        </button>
      </div>
      <div className="col-lg-2 bg-dark text-white rounded p-3 mt-3">
        {course.instructor}
      </div>
      <div className="col-lg-1 bg-dark text-white rounded p-3 mt-3 text-center">
        {course.level}
      </div>
      <div className="col-lg-2 bg-dark text-white rounded p-3 mt-3">
        {course.startDate}
      </div>
      <div className="col-lg-2 bg-dark text-white rounded p-3 mt-3">
        {course.publishedOn}
      </div>
      <div className="col-lg-1 bg-dark text-white rounded p-3 mt-3 text-center">
        <Link className="text-warning" href="#" aria-label="Edit or Delete">
          <FaRegPenToSquare aria-hidden="true" />{" "}
          <FaTrashCan aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}

export default CourseRow;
