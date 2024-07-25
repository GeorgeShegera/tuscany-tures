import React from "react";
import style from "./OurServices.module.scss";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

export default function OurServices({ className }) {
  return (
    <section className={`${className} ${style.section}`}>
      <div className={`container ${style.container}`}>
        <ServiceCard
          img="./imgs/service-1.png"
          caption="Bike and rickshaw rental"
          text="Book your quality vehicle quickly for an hour or all day!"
        ></ServiceCard>
        <ServiceCard
          img="./imgs/service-2.png"
          caption="Guided tour of the countryside"
          text="Live the real Lucchese experience by visiting the suburbs by bike!"
        ></ServiceCard>
        <ServiceCard
          img="./imgs/service-3.jpg"
          caption="Taxi and NCC service"
          text="Do you need not only a bike but also a driver? Then you have found the right place!"
        ></ServiceCard>
        <ServiceCard
          img="./imgs/service-4.jpg"
          caption="Bus Package"
          text="Do you need not only a bike but also a driver? Then you have found the right place!"
        ></ServiceCard>
      </div>
    </section>
  );
}
