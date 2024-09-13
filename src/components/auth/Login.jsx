import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/seff_logo_black.jpg";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { LuUserSquare2 } from "react-icons/lu";
import { BsFileLock } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slice/AuthSlice";

const Login = () => {
  const [activepassword, setActivepassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  // Redirect if already authenticated or after successful login
  useEffect(() => {
    if (isAuthenticated && user) {
      // Redirect based on user role
      if (user.role === "admin") {
        navigate("/adminportal");
      } else if (user.role === "instructor") {
        navigate("/instructorportal");
      } else if (user.role === "student") {
        navigate("/studentportal");
      }
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <section className="login-form">
      <div className="form-box">
        <form onSubmit={handleLogin}>
          <img className="logo" src={Logo} alt="logo" />
          <div className="input-box">
            <label htmlFor="userid">
              <LuUserSquare2 />
            </label>
            <input
              type="text"
              id="userid"
              name="userid"
              placeholder="User Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">
              <BsFileLock />
            </label>
            <input
              type={`${activepassword ? "text" : "password"}`}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p onClick={() => setActivepassword(!activepassword)}>
              {activepassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
            </p>
          </div>
          <button
            type="button"
            className="forget-btn"
            onClick={() => navigate("/forgetpassword")}
          >
            forget your password ?
          </button>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p className="account">
          Don't have an account yet? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
