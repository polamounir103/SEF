import React from "react";
import Course from "./Course";

function InProgressCourses() {
  return (
    <div className="mb-4">
      <h5 className="text-white">In Progress</h5>
      <div>
        <div className="card-body">
          <Course
            title="Introduction to Data Analysis"
            instructor="Instructor Name"
            level="1"
          />
          <Course
            title="Introduction to React JS"
            instructor="Instructor Name"
            level="1"
          />
        </div>
      </div>
    </div>
  );
}

export default InProgressCourses;
