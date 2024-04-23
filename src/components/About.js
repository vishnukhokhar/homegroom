import React from "react";
import { aboutCardData } from "../data";
const About = () => {
  return (
    <div className="aboutCards">
      {aboutCardData.map((card) => {
        const { id, icon, title, text } = card;
        return (
          <div className="aboutCard" key={id}>
            <div style={{ color: "rgb(6, 199, 192)" }}>
              {React.cloneElement(icon, { size: 70 })}{" "}
            </div>
            <br />
            <h2>{title}</h2>
            <br />
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};
export default About;
