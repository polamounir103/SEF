import logo from "./logo.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminPanel from "./pages/AdminPortal";
import Home from "./pages/Home"; // Make sure this is the correct path
import NoPage from "./pages/NoPage"; // Make sure this is the correct path
import Header from "./components/Header";
import Footer from "./components/Footer";
import JobsPage from "./pages/JobsPage";

import BusinessNewsPage from "./pages/BusinessNewsPage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <div className="px-3">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/business-news" element={<BusinessNewsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/adminportal/*" element={<AdminPanel />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
