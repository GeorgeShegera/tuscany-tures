import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initTour } from "../../Slices/tours/toursSlice";
import style from "./TourPage.module.scss";
import TourHeroSection from "../../Layouts/TourSections/TourHeroSection/TourHeroSection";
import TourDetailsSection from "../../Layouts/TourSections/TourDetailsSection/TourDetailsSection";
import GallerySection from "../../Layouts/TourSections/GallerySection/GallerySection";
import ReviewsSection from "../../Layouts/ReviewsSection/Reviews";
import useHeaderOffset from "../../Hooks/useHeaderOffset";

export default function TourPage() {
  const { tourId } = useParams();
  const dispatch = useDispatch();
  const offsetY = useHeaderOffset();

  useEffect(() => {
    dispatch(initTour(tourId));
  }, [tourId]);

  return (
    <main className={style.main} style={{ paddingTop: offsetY }}>
      <div className="container">
        <TourHeroSection></TourHeroSection>
        <TourDetailsSection></TourDetailsSection>
        <GallerySection></GallerySection>
        <ReviewsSection tourId={tourId}></ReviewsSection>
      </div>
    </main>
  );
}
