import React, { useContext, useEffect, useRef, useState } from "react";
import style from "./ToursPackages.module.scss";
import { SectionRefsContext } from "../../Providers/SectionRefsContext";
import { useDispatch, useSelector } from "react-redux";
import { selectTourCards, initTourCards } from "../../Slices/tours/toursSlice";
import TourCard from "../../Components/TourCard/TourCard";

export default function ToursPackages({ className }) {
  const { setIntroSection } = useContext(SectionRefsContext);
  const toursSection = useRef(null);
  const tourCards = useSelector(selectTourCards);
  const [pageNumber, setPageNumber] = useState(0);
  const [cardsCount, setCardsCount] = useState(8);
  const dispatch = useDispatch();

  useEffect(() => {
    setIntroSection(toursSection.current);
  }, []);

  useEffect(() => {
    dispatch(initTourCards({ pageNumber, cardsCount }));
  }, [pageNumber, cardsCount]);

  return (
    <section ref={toursSection} className={`${className} ${style.section}`}>
      <h2 className={`heading-secondary ${style.heading}`}>Tour Packages</h2>
      <div className={style.content}>
        {tourCards.map((tour, index) => (
          <TourCard
            key={`tour-card_${tour.id}`}
            id={tour.id}
            imgAddress={tour.img}
            title={tour.name}
            price={tour.price}
            dateType={tour.scheduleType}
            minGroupNumber={tour.minNumberOfGroup}
            maxGroupNumber={tour.maxNumberOfGroup}
            description={tour.description}
          ></TourCard>
        ))}
      </div>
    </section>
  );
}
