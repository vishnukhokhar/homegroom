import React from "react";
import Svg from "./Svg";
import Navbar from "./navbar";
import img1 from "../imgs/images.jpg";
import img2 from "../imgs/sigin.jpg";

const Hero = () => {
  return (
    <>
      {" "}
      <div className="background" style={{}}>
        <Navbar />
        <div className="content">
          <div className="text">
            <h1>Customer's Choice Homegroom</h1>
            <p className="para">
              Finding a reliable online services is no more difficult specially
              when it comes to domestic help. so what are you waiting for click
              the button below.
            </p>
            <button className="btn">Book Now</button>
          </div>
          <div className="homeimgs">
            <div className="imgright">
              <img
                className="imgright"
                src={img1}
                style={{
                  height: "200px",
                  width: "auto",
                  maxWidth: "100%",
                  borderRadius: "12px",
                }}
                alt=""
              />
            </div>
            <div>
              <img
                className="imgleft"
                src={img2}
                style={{
                  height: "200px",
                  width: "auto",
                  maxWidth: "100%",
                  borderRadius: "12px",
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Svg className="curve" />
    </>
  );
};

export default Hero;
