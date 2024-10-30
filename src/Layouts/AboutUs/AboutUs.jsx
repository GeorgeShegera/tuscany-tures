import React, { useRef } from "react";
import style from "./AboutUs.module.scss";
import useRevealingElements from "../../Hooks/useRevealingElements";
import { InView } from "react-intersection-observer";

export default function AboutUs({ className, subHeading, heading, text, img }) {
  const sectionAboutUs = useRef();
  const inView = useRevealingElements(sectionAboutUs);

  return (
    <section
      ref={sectionAboutUs}
      className={`${className} container ${style.container} ${
        inView ? "section" : "section_hidden"
      }`}
    >
      <div className={style.photoContainer}>
        <img className={style.photo} src={img} alt="" />
      </div>
      <div className={style.content}>
        <div className={style.header}>
          <p className={style.subTitle}>{subHeading}</p>
          <h2 className="heading-secondary">{heading}</h2>
        </div>
        <p className={style.text}>{text}</p>
        <ul className={style.info}>
          <li className={style.item}>
            <span className={style.value}>20+</span>
            <p className={style.title}>Years Experience</p>
          </li>
          <li className={style.item}>
            <span className={style.value}>100+</span>
            <p className={style.title}>Happy Customers</p>
          </li>
          <li className={style.item}>
            <span className={style.value}>15+</span>
            <p className={style.title}>Choices of Services</p>
          </li>
          <li className={style.item}>
            <span className={style.value}>10+</span>
            <p className={style.title}>Professional Guides</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
