import React, { useContext } from "react";
import Hero from "../../Layouts/Hero/Hero";
import PopularDestinations from "../../Layouts/HomeSections/SectDestinations/PopularDestinations";
import SpecialOffers from "../../Layouts/SpeicialOffers/SpecialOffers";
import OurServices from "../../Layouts/OurServices/OurServices";
import AboutUs from "../../Layouts/AboutUs/AboutUs";
import PackageForm from "../../Layouts/PackageFormSection/PackageForm";
import Reviews from "../../Layouts/ReviewsSection/Reviews";
import PopularPackages from "../../Layouts/PopularPackages/PopularPackages";

export default function HomePage() {
  return (
    <main className={"main"}>
      <Hero
        className={"main__section_full-width"}
        imgUrl="./imgs/homeHeaderBackgound.jpg"
        headingText="Enjoy in the best way!"
        subHeadingText="Enjoy our services for your trip anytime"
      ></Hero>
      <PopularDestinations
        className={"main__section_space-between"}
      ></PopularDestinations>
      <AboutUs
        heading="We are the best company for your visit"
        subHeading="WELCOME TO OUR SITE!"
        className={"main__section_space-between"}
        text={
          "After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!"
        }
        img={"imgs/aboutPicture1.jpg"}
      ></AboutUs>
      <SpecialOffers className={"main__section_full-width"}></SpecialOffers>
      <OurServices className={"main__section_space-between"}></OurServices>
      <PackageForm className={"main__section_full-width"}></PackageForm>
      <PopularPackages
        className={"main__section_space-between"}
      ></PopularPackages>
      <Reviews className={"main__section_space-between"}></Reviews>
    </main>
  );
}
