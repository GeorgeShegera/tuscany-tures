import React from "react";
import Hero from "../../Layouts/Hero/Hero";
import PrimaryBtn from "../../Components/PrimaryBtn/PrimaryBtn";
import AboutUs from "../../Layouts/AboutUs/AboutUs";
import Advantages from "../../Layouts/Advantages/Advantages";
import Reviews from "../../Layouts/ReviewsSection/Reviews";
import style from "./AboutUs.module.scss";

export default function AbousUs() {
  return (
    <main className="main">
      <Hero
        className="main__section_full-width"
        headingText={"Out team cares about your full relax"}
        subHeadingText={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
        }
        imgUrl="./imgs/aboutHeaderBackground.png"
      >
        <PrimaryBtn type="white" className={style.btnTourPackages}>
          View our Tour Packages
        </PrimaryBtn>
      </Hero>
      <AboutUs
        className={`${style.sectionAbout} main__section_space-between`}
        subHeading="WELCOME TO OUR SITE!"
        heading="We Are The Center Of Lucca To Offer You The Best"
        text="We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!"
        img="imgs/aboutPicture2.png"
      ></AboutUs>
      <Advantages className={"main__section_full-width"}></Advantages>
      <Reviews className={"main__section_space-between"}></Reviews>
    </main>
  );
}
