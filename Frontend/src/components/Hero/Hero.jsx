import React from "react";
import Notice from "./Notice";
import HeroBanner from "../../assets/play-your-own-way-web.avif";

const Hero = () => {
  return (
    <>
      <Notice />
      <img src={HeroBanner} alt="Hero Banner" className="w-screen" />
    </>
  );
};

export default Hero;
