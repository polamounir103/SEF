import React, { useState } from 'react'
import Logo from "../../assets/images/seff_logo_black.jpg";
import { Link, useNavigate } from 'react-router-dom'
import './Auth.css'
import { LuUserSquare2 } from "react-icons/lu";
import { BsFileLock } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaRegEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [activepassword, setActivepassword] = useState(false)
    const navigate = useNavigate()
    return (
      <section className="login-form">
        <div className="form-box">
          <form>
            <img className=" logo" src={Logo} alt="logo" />
            <div className="input-box">
              <label htmlFor="userid">
                <LuUserSquare2 />
              </label>
              <input
                type="text"
                id="userid"
                name="userid"
                placeholder="User ID"
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
              />
              <p onClick={() => setActivepassword(!activepassword)}>
                {activepassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
              </p>
            </div>
            <button
              className="forget-btn"
              onClick={() => navigate("/forgetpassword")}
            >
              forget your password ?
            </button>
            <button
              onClick={() => navigate("/")}
              type="submit"
              className="login-btn"
            >
              Login
            </button>
          </form>
          <p className="account">
            Don't have an acoount yet ?<Link to="/signup"> Sign up</Link>
          </p>
        </div>
      </section>
    );
}

export default Login