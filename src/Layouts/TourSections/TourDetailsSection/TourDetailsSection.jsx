import React from "react";
import style from "./TourDetailsSection.module.scss";
import DetailsList from "../../../Components/TourDetailsList/TourDetailsList";
import { selectTour } from "../../../Slices/tours/toursSlice";
import { useSelector } from "react-redux";

function TourDetailsSection() {
  const tour = useSelector(selectTour);

  return (
    <section className={style.sectionDetails}>
      <div className={style.flexContainer}>
        <h2 className={`heading-secondary ${style.heading}`}>Details</h2>
        <p className={style.details}>{tour.details}</p>
        <DetailsList></DetailsList>
      </div>
    </section>
  );
}

export default TourDetailsSection;
