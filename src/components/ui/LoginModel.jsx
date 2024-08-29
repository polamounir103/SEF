import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LoginModel.css";
const LoginModel = (props) => {

  console.log(props); 
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    console.log(props)
  });
  const toggleIsActive = () => {
    setIsActive(true);
  };

  return (
    <section className={`login-model ${isActive ? "active":"hide"} `}>
      <div className="wrapper">
        <button onClick={toggleIsActive}>X</button>
        <div>
          <p>Please login to view this page</p>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </section>
  );
};

export default LoginModel;
