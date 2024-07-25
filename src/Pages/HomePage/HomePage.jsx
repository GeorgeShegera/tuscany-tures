import React from "react";
import HeroSection from "../../Layouts/HomeSections/SectHero/Hero";
import PopularDestinations from "../../Layouts/HomeSections/SectDestinations/PopularDestinations";
import SpecialOffers from "../../Layouts/SpeicialOffers/SpecialOffers";
import OurServices from "../../Layouts/OurServices/OurServices";
import AboutUs from "../../Layouts/AboutUs/AboutUs";
import Reviews from "../../Layouts/ReviewsSection/Reviews";
import style from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <main className={style.main}>
      <HeroSection className={style.fullWidth}></HeroSection>
      <PopularDestinations className={style.spaceBetween}></PopularDestinations>
      <AboutUs className={style.spaceBetween}></AboutUs>
      <SpecialOffers className={style.fullWidth}></SpecialOffers>
      <OurServices className={style.spaceBetween}></OurServices>
      <Reviews className={style.spaceBetween}></Reviews>
    </main>
  );
}
