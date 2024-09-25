import React from "react";
import style from "./Advantages.module.scss";
import Advantage from "../../Components/Advantage/Advantage";

export default function Advantages({ className }) {
  return (
    <section className={`${className} ${style.section}`}>
      <div className={`container ${style.container}`}>
        <Advantage
          iconName="map"
          text="Complete Packages For All Your Wishes"
        ></Advantage>
        <Advantage
          iconName="experience"
          text="Over 30 years of experience"
        ></Advantage>
        <Advantage iconName="guide" text="Expert Guides For You"></Advantage>
        <Advantage
          iconName="best-price"
          text="Guaranteed fun at the best price!"
        ></Advantage>
      </div>
    </section>
  );
}
