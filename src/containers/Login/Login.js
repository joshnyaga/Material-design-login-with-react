import React from "react";
import { FaUser } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import circle from "../../images/circle.png";
import triangle from "../../images/triangle.png";
import "./login.css";
const Login = () => {
  return (
    <div className="container">
      <img src={circle} className="imageCircle" alt="" />
      <img src={triangle} className="imageTriangle" alt="" />
      <div className="login-wrapper">
        <div className="headline">
          Bem vindo ao <span>LOGIN </span>{" "}
        </div>
        <div className="tagline">Preencha os dados do login para acessar</div>
        <form action="">
          <div className="form">
            <div className="input-group">
              <label htmlFor="">Username</label>
              <input type="text" placeholder="Joshkish" />
              <FaUser />
            </div>
            <div className="input-group">
              <label htmlFor="">Password</label>
              <input type="text" placeholder="password" />
              <FaEyeSlash />
            </div>
          </div>
          <button className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
