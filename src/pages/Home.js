import React from "react";
import Register from "../components/Register";
import Services from "../components/services";

import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Register />
      <Footer></Footer>
    </div>
  );
};

export default Home;
