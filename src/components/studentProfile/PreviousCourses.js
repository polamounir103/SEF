import React from "react";
import Course from "./Course";

function PreviousCourses() {
  return (
    <div className="mb-4">
      <h5 className="text-white">Previous Courses</h5>
      <div>
        <div className="card-body">
          <Course
            title="System Analysis and Design"
            instructor="Instructor Name"
            level="1"
          />
          <Course
            title="Introduction to Web Development"
            instructor="Instructor Name"
            level="1"
          />
        </div>
      </div>
    </div>
  );
}

export default PreviousCourses;
