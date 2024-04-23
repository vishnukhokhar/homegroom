import React from "react";
import dummyImage from "../imgs/allRounder.jpeg";

const Register = () => {
  return (
    <div className="end">
      <div className="register">
        <img src={dummyImage} alt="dummy" className="register-image" />

        <div className="register-content">
          <h1>Register as Worker</h1>
          <p style={{ fontSize: "20px" }}>
            Register with HomeGroom by filling the form and we will reach you
          </p>
          <button className="btn">Fill Details</button>
        </div>
      </div>
      <div className="contactusright">
        <div className="contactus">
          <h1>Contact us to reach Quicker</h1>
          <form action="" className="contactform">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" />
            <br />
            <label htmlFor="phone">Ph. number</label>
            <input type="number" />
            <br />
            <label htmlFor="email">Email Id</label>
            <input type="email" />
            <br />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
