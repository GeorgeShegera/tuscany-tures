import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectTour, initTour } from "../../Slices/tours/toursSlice";
import style from "./TourPage.module.scss";
import TourHeroSection from "../../Layouts/TourSections/TourHeroSection/TourHeroSection";
import TourDetailsSection from "../../Layouts/TourSections/TourDetailsSection/TourDetailsSection";
import GallerySection from "../../Layouts/TourSections/GallerySection/GallerySection";

export default function TourPage() {
  const { tourId } = useParams();
  const dispatch = useDispatch();
  const tour = useSelector(selectTour);

  useEffect(() => {
    dispatch(initTour(tourId));
  }, [tourId]);

  return (
    <main className={style.main}>
      <div className="container">
        <TourHeroSection></TourHeroSection>
        <TourDetailsSection></TourDetailsSection>
        <GallerySection></GallerySection>
      </div>
    </main>
  );
}
