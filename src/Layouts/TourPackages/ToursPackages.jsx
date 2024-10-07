import React, { useContext, useEffect, useRef, useState } from "react";
import style from "./ToursPackages.module.scss";
import { SectionRefsContext } from "../../Providers/SectionRefsContext";

export default function ToursPackages({ className }) {
  const { setIntroSection } = useContext(SectionRefsContext);
  const toursSection = useRef();

  useEffect(() => {
    setIntroSection(toursSection.current);
  }, []);

  return (
    <section ref={toursSection} className={`${className} ${style.section}`}>
      <h2 className="heading-secondary">Tour Packages</h2>
      <div className={style.content}></div>
    </section>
  );
}
