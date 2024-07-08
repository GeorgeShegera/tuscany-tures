import React from "react";
import style from "./Hero.module.css";

function Hero({ className }) {
  return <section className={`${style.heroSection} ${className}`}></section>;
}

export default Hero;
