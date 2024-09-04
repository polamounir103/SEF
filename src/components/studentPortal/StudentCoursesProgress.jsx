import React from "react";
import CourseCard from "./CourseCard";

const StudentCoursesProgress = () => {
  const courses = [
    {
      title: "Introduction to React js",
      progress: 91,
      level: "LEV. 1",
      hours: "27 / 30 Hours",
    },
    {
      title: "Introduction to Data Analysis",
      progress: 75,
      level: "LEV. 1",
      hours: "27 / 30 Hours",
    },
    {
      title: "System analysis and design",
      progress: 100,
      level: "LEV. 1",
      hours: "27 / 30 Hours",
    },
  ];

  return (
    <div className="d-flex justify-content-between flex-column flex-lg-row gap-3 ">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          percentage={course.percentage}
          title={course.title}
          level={course.level}
          hoursCompleted={course.hoursCompleted}
          totalHours={course.totalHours}
        />
      ))}
    </div>
  );
};

export default StudentCoursesProgress;
