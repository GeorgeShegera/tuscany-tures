import React from "react";
import style from "./ServicesSection.module.scss";
import ServicePackageCard from "../../Components/ServicePackageCard/ServicePackageCard";

export default function ServicesSection({ className }) {
  return (
    <section className={`${className}`}>
      <h2 className="heading-secondary">Services</h2>
      <div className={style.servicesGrid}>
        <ServicePackageCard
          img="https://i.imgur.com/sHIRjrh.png"
          title="Bike and rickshaw rental"
          description="Book your quality vehicle quickly for an hour or all day!"
        ></ServicePackageCard>
        <ServicePackageCard
          img="https://i.imgur.com/r6UICdQ.png"
          title="Bike and rickshaw rental"
          description="Book your quality vehicle quickly for an hour or all day!"
        ></ServicePackageCard>
        <ServicePackageCard
          img="https://i.imgur.com/sHIRjrh.png"
          title="Bike and rickshaw rental"
          description="Book your quality vehicle quickly for an hour or all day!"
        ></ServicePackageCard>
      </div>
    </section>
  );
}
