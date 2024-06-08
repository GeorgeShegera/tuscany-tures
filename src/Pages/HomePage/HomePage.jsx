import React from "react";
import HeroSection from "../../Layouts/HomeSections/SectHero/Hero";
import PopularDestinations from "../../Layouts/HomeSections/SectDestinations/PopularDestinations";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      <HeroSection></HeroSection>
      <PopularDestinations></PopularDestinations>
    </main>
  );
}
