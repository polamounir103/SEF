import React from "react";
import { FaRegPenToSquare, FaTrashCan } from "react-icons/fa6";
// import "./CourseCard.css"; 

function CourseCard({ course }) {
  return (
    <div className="course-card mobile mx-auto row bg-dark bg-opacity-75 mt-5 rounded p-4">
      <div className="col-9 text-light fw-bolder fs-4 mt-3">
        {course.courseName}
      </div>
      <div className="col-3">
        <button
          className={`btn btn-${
            course.status === "Ongoing" ? "warning" : "secondary"
          } mt-3`}
        >
          {course.status}
        </button>
      </div>
      <div className="col-6 text-light fw-bolder fs-4 mt-3">Level</div>
      <div className="col-6 text-light fw-bolder fs-4 mt-3">{course.level}</div>
      <div className="col-6 text-light fw-bolder fs-4 mt-3">
        Number of Lessons
      </div>
      <div className="col-6 text-light fw-bolder fs-4 mt-3">
        {course.lessons}
      </div>
      <div className="col-6 text-light fw-bolder fs-4 mt-3">Language</div>
      <div className="col-6 text-light fw-bolder fs-4 mt-3">
        {course.language}
      </div>
      <div className="col-6 text-light fw-bolder fs-4 mt-3">Start Date</div>
      <div className="col-6 text-light fw-bolder fs-4 mt-3">
        {course.startDate}
      </div>
      <div className="col-6 text-light fw-bolder fs-4 mt-3">Duration</div>
      <div className="col-6 text-light fw-bolder fs-4 mt-3">
        {course.duration}
      </div>
      <div className="col-6 text-light fw-bolder fs-4 mt-3">Published On</div>
      <div className="col-6 text-light fw-bolder fs-4 mt-3">
        {course.publishedOn}
      </div>
      <div className="col-4 offset-8 text-light fw-bolder fs-4 mt-3 text-end">
        <a className="text-warning" href="#" aria-label="Edit or Delete">
          <FaRegPenToSquare aria-hidden="true" />
          <FaTrashCan aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default CourseCard;
