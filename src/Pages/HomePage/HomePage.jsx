import React from "react";
import HeroSection from "../../Layouts/HomeSections/SectHero/Hero";
import PopularDestinations from "../../Layouts/HomeSections/SectDestinations/PopularDestinations";
import Footer from "../../Layouts/Footer/Footer";
import Reviews from "../../Layouts/ReviewsSection/Reviews";
import style from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <main className={style.main}>
      <HeroSection className={style.fullWidth}></HeroSection>
      <PopularDestinations className={style.spaceBetween}></PopularDestinations>
      <Reviews className={style.spaceBetween}></Reviews>
    </main>
  );
}
