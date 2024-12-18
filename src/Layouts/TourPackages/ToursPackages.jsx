import React, { useContext, useEffect, useRef, useState } from "react";
import style from "./ToursPackages.module.scss";
import { SectionRefsContext } from "../../Providers/SectionRefsContext";
import { useDispatch, useSelector } from "react-redux";
import { selectTourCards, initTourCards } from "../../Slices/tours/toursSlice";
import TourCard from "../../Components/TourCard/TourCard";
import useRevealingElements from "../../Hooks/useRevealingElements";
import { CiSearch } from "react-icons/ci";

export default function ToursPackages({ className }) {
  const { setIntroSection } = useContext(SectionRefsContext);
  const toursSection = useRef(null);
  const tourCards = useSelector(selectTourCards);
  const [requestParams, setRequestParams] = useState({
    pageNumber: 0,
    cardsCount: 8,
    searchName: null,
  });
  const dispatch = useDispatch();
  const inView = useRevealingElements(toursSection);
  const searchRef = useRef();

  useEffect(() => {
    setIntroSection(toursSection.current);
  }, []);

  useEffect(() => {
    dispatch(initTourCards(requestParams));
  }, [requestParams]);

  return (
    <section
      ref={toursSection}
      className={`${className} ${style.section} ${
        inView ? "section" : "section_hidden"
      }`}
    >
      <div className={style.container}>
        <h2 className={`heading-secondary ${style.heading}`}>Tour Packages</h2>
        <div className={style.searchContainer}>
          <div className={style.searchBarWrapper}>
            <input
              className={`${style.searchBar} search-bar`}
              type="text"
              ref={searchRef}
            />
          </div>
          <div className={style.filters}></div>
          <button
            className={`${style.searchBtn} searchBtn`}
            onClick={() => {
              setRequestParams({
                ...requestParams,
                searchName: searchRef.current.value,
              });
            }}
          >
            <CiSearch />
            Search
          </button>
        </div>
        <div className={`${style.content} search-results`}>
          {tourCards.map((tour, index) => (
            <TourCard
              key={`tour-card_${tour.id}`}
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
      </div>
    </section>
  );
}
