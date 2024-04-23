import React from "react";
import sign from "../imgs/sigin.jpg";
import { NavLink } from "react-router-dom";
const Signin = () => {
  return (
    <div className="signinpage">
      <img
        src={sign}
        style={{ height: "70vh", width: "40vw" }}
        alt=""
        className="signimg"
      />
      <div className="signin">
        <h1>Sign in</h1>
        <p>Please fill in your information below to Continue</p>
        <form action="" className="signindetails">
          <label htmlFor=""></label>
          <input type="email" placeholder="Email" />
          <label htmlFor=""></label>
          <input type="password" placeholder="password at least 6 characters" />
          <button className="signbtn">Sign in</button>
        </form>
        <p>New to Homegroom</p>
        <NavLink to="/signup" style={{ color: "#ffc31f" }}>
          Create Account
        </NavLink>
      </div>
    </div>
  );
};

export default Signin;
