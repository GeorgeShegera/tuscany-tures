import React from "react";
import style from "./AboutUs.module.scss";

export default function AboutUs({ className }) {
  return (
    <section className={`${className} container ${style.container}`}>
      <div className={style.photoContainer}>
        <img className={style.photo} src="imgs/aboutPicture1.jpg" alt="" />
      </div>
      <div className={style.content}>
        <div className={style.header}>
          <p className={style.subTitle}>WELCOME TO OUR SITE!</p>
          <h2 className="heading-secondary">
            We are the best company for your visit
          </h2>
        </div>
        <div className={style.text}>
          After decades of experience, and a whole life in Lucca, we offer you
          the most complete tourism service in the city. In addition to having
          bikes and rickshaws to have as much fun as you want, you have the
          choice of tour guides with whom to tour and drivers for your every
          need! We offer packages in the way that you get the most at the lowest
          price. Book with us and we will always be available for you!
        </div>
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
