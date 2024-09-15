import React, { useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useFormattedDate from "../hooks/useFormattedDate";
import { Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/ui/loader/Loader";
import NewCoursesSlider from "../components/coursesPage/NewCoursesSlider";
import AllCoursesTable from "../components/coursesPage/AllCoursesTable";

const CoursesPage = () => {
  const date = useFormattedDate();
  const url = "../DB/courses.json";
  const options = useMemo(
    () => ({
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }),
    []
  );

  const { data, error, loading } = useFetchData(url, options);

  useEffect(() => {
    if (error) {
      console.error("Error fetching data:", error);
    }
  }, [error]);

  const newCoursesData = data?.filter((course) => course.isNew === true);
  console.log(newCoursesData);
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <p className="text-danger">Error fetching data</p>
      </div>
    );
  }

  return (
    <div className="">
      <div>
        <h2 className="page-title">Courses</h2>
        <p>{date}</p>
      </div>
      <NewCoursesSlider newCoursesData={newCoursesData} />
      <AllCoursesTable data={data} />
    </div>
  );
};

export default CoursesPage;
