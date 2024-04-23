import React from "react";
import sign from "../imgs/sigin.jpg";
import { NavLink } from "react-router-dom";
const Signup = () => {
  return (
    <div className="signinpage">
      <img
        src={sign}
        style={{ height: "70vh", width: "40vw" }}
        alt=""
        className="signimg"
      />
      <div className="signin">
        <h1>Create Account</h1>
        <p>We suggest using email address you use at work</p>
        <form action="" className="signindetails">
          <label htmlFor=""></label>
          <input type="email" placeholder="Email" />
          <label htmlFor=""></label>
          <input type="password" placeholder="password at least 6 characters" />
          <button className="signbtn">Sign in</button>
        </form>
        <p>Already have an account</p>
        <NavLink to="/signin" style={{ color: "#ffc31f" }}>
          Signin
        </NavLink>
      </div>
    </div>
  );
};

export default Signup;
