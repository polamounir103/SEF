import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ArticlesTable from "../components/adminProtal/ArteclesTable";
import CertificateForm from "../components/adminProtal/CertificateForm";
// import Final from "../src/Final";
import AddNewArticle from "../components/adminProtal/articlesComponents/AddNewArticle";
import ArticlesTable from "../components/adminProtal/articlesComponents/ArticlesTable";
import Sidebar from "../components/adminProtal/sideMenu/Sidebar";
import { Route, Routes } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth ";
import Jobs from "../components/adminProtal/jobs/Jobs";
import AddJobForm from "../components/adminProtal/jobs/AddJobForm";
import UserStudentTable from "../components/adminProtal/usersComponents/students/UserStudentTable";

function AdminPanel() {
  const { width } = useWindowWidth();
  // console.log(width, screenType);
  const containerStyle =
    width > 992
      ? {
          display: "grid",
          gridTemplateColumns: "3fr 9fr",
          margin: "auto",
          width: "100%",
          gap: "50px",
        }
      : {
          display: "grid",
          gridTemplateColumns: "1fr",
          margin: "auto",
          width: "100%",
          backGround: "red",
        };

  return (
    <div className="">
      <div className=" d-flex flex-column gap-5 justify-content-center align-items-between ">
        <div className="d-flex flex-column gap-5 justify-content-center align-items-center">
          <div style={containerStyle}>
            <div style={{}}>
              <Sidebar />
            </div>
            <div xs={12} md={9} className="vaiable-container">
              <Routes>
                <Route path="/" element={<ArticlesTable />} />
                <Route path="/students" element={<UserStudentTable />} />
                <Route path="articles" element={<ArticlesTable />} />
                <Route
                  path="articles/add-new-article"
                  element={<AddNewArticle />}
                />
                <Route path="jobs" element={<Jobs />} />
                <Route path="/jobs/add-new-job" element={<AddJobForm />} />
                <Route
                  path="/upload-certificate"
                  element={<CertificateForm />}
                />
              </Routes>
              {/* <AddJobForm /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
