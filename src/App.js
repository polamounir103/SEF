import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminPanel from "./pages/AdminPortal";
import Header from "./components/Header";
import Footer from "./components/Footer";

import BusinessNewsPage from "./pages/BusinessNewsPage";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import JobsPage from "./pages/JobsPage";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage"; 

// import ContactUsPage from "./pages/ContactUsPage"; // Add this import
// import SportsPage from "./pages/SportsPage"; // Add this import
// import MedicalPage from "./pages/MedicalPage"; // Add this import
// import StartupsPage from "./pages/StartupsPage"; // Add this import
// import AppsPage from "./pages/AppsPage"; // Add this import
// import TechPage from "./pages/TechPage"; // Import the Tech page
// import TechLaptopsPage from "./pages/TechLaptopsPage"; // Import Laptops Page
// import TechPhonesPage from "./pages/TechPhonesPage"; // Import Phones Page
// import TechTabletsPage from "./pages/TechTabletsPage"; // Import Tablets Page

// import CoursesPage from "./pages/CoursesPage"; // Import Courses page
// import PythonCoursePage from "./pages/PythonCoursePage"; // Import Python course page
// import JavaCoursePage from "./pages/JavaCoursePage"; // Import Java course page
// import JavaScriptCoursePage from "./pages/JavaScriptCoursePage"; // Import JavaScript course page
// import CSSCoursePage from "./pages/CSSCoursePage"; // Import CSS course page
// import HTMLCoursePage from "./pages/HTMLCoursePage"; // Import HTML course page

import { SpeedInsights } from "@vercel/speed-insights/react";
import SingleArticle from "./pages/SingleArticle";
import ContactUs from "./pages/ContactUs";
import CoursesTable from "./components/courses/CoursesTable";
import Profile from "./pages/StudentProfile";
import EditStudentProfile from "./pages/EditStudentProfile";
import StudentExams from "./pages/StudentExams";
import InstructorPortal from "./pages/InstructorPortal";
import StudentPortal from "./pages/StudentPortal";
// import InstructorPortalHeader from "./components/instructorPortal/InstructorPortalHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SpeedInsights />
        <Header />

        <div className="px-3 text-light">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/business-news" element={<BusinessNewsPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-edit" element={<EditStudentProfile />} />
            <Route path="/article" element={<SingleArticle />} />
            <Route path="/article/:id" element={<SingleArticle />} />
            <Route path="/adminportal/*" element={<AdminPanel />} />
            <Route path="/instructorportal" element={<InstructorPortal />} />
            <Route path="/studentportal" element={<StudentPortal />} />
            <Route path="/about" element={<div>PAGE</div>} />
            <Route path="/contact" element={<ContactUs />} />

            <Route path="/sports" element={<div>PAGE</div>} />
            <Route path="/medical" element={<div>PAGE</div>} />
            <Route path="/startups" element={<div>PAGE</div>} />
            <Route path="/apps" element={<div>PAGE</div>} />
            {/* Tech Submenu Routes */}
            <Route path="/tech" element={<div>PAGE</div>} />
            <Route path="/tech/laptops" element={<div>PAGE</div>} />
            <Route path="/tech/phones" element={<div>PAGE</div>} />
            <Route path="/tech/tablets" element={<div>PAGE</div>} />

            {/* Courses Submenu Routes */}
            <Route path="/courses" element={<CoursesTable />} />
            <Route path="/courses/python" element={<div>PAGE</div>} />
            <Route path="/courses/java" element={<div>PAGE</div>} />
            <Route path="/courses/javascript" element={<div>PAGE</div>} />
            <Route path="/courses/css" element={<div>PAGE</div>} />
            <Route path="/courses/html" element={<div>PAGE</div>} />

            <Route path="/student-exams" element={<StudentExams />} />

            {/* Catch-All Route for NoPage */}
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
