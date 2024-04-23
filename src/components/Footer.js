import React from "react";
import { footerData } from "../data";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="fot">
          {" "}
          <h1>Get the App</h1>
          <div className="fotr">
            <button>App Store</button>
            <button>Google play</button>
          </div>
        </div>
        <div className="row footer-row">
          <div className="fservices">
            {footerData.services.map((service, index) => (
              <div className="footer-service" key={index}>
                <h4>{service.title}</h4>
                <ul>
                  {service.categories.map((category, index) => (
                    <li key={index}>{category.title}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="fabout">
            {footerData.aboutUs.map((item, index) => (
              <p key={index} className="footer-about">
                {item.title}
              </p>
            ))}
          </div>
          <div className="fcontact">
            {footerData.contactUs.map((item, index) => (
              <p key={index} className="footer-contact">
                {item.title}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="copyrights">
        <p>&copy; 2024 HomeGroom. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
