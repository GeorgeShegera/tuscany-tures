import style from "./PopularDestionations.module.css";
import { useEffect, useRef, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import TourCard from "../../../Components/TourCard/TourCard";

import {
  initTourCards,
  selectTourCards,
} from "../../../Slices/tours/toursSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function () {
  const [swiperStart, setSwiperStart] = useState(true);
  const [swiperEnd, setSwiperEnd] = useState(false);
  const dispatch = useDispatch();
  const tours = useSelector(selectTourCards);
  const swiperRef = useRef();

  useEffect(() => {
    dispatch(initTourCards());
    console.log(tours);
  }, []);

  return (
    <section className={style.sectionDest}>
      <div className={style.container}>
        <div className={style.header}>
          <h2>Explore Our Popular Destinantions</h2>
          <div className={style.btnContainer}>
            <button
              className={`${style.btn} ${swiperStart ? style.btnDisabled : ""}`}
              onClick={() => swiperRef.current.slidePrev()}
            >
              <GoChevronLeft />
            </button>
            <button
              className={`${style.btn} ${swiperEnd ? style.btnDisabled : ""}`}
              onClick={() => swiperRef.current.slideNext()}
            >
              <GoChevronRight />
            </button>
          </div>
        </div>

        <Swiper
          className={style.swiper}
          spaceBetween={33}
          slidesPerView={4}
          modules={[Navigation, Scrollbar]}
          direction={"horizontal"}
          scrollbar={{
            el: ".swiper-scrollbar__trips",
            draggable: true,
            dragSize: 120,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onFromEdge={() => {
            setSwiperEnd(false);
            setSwiperStart(false);
          }}
          onReachEnd={() => {
            setSwiperEnd(true);
          }}
          onReachBeginning={() => {
            setSwiperStart(true);
          }}
          breakpoints={{
            960: {
              slidesPerView: 4,
            },

            720: {
              slidesPerView: 3,
            },
            528: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1.5,
            },
          }}
        >
          {tours.map((tour) => (
            <SwiperSlide key={tour.id}>
              <TourCard
                id={tour.id}
                imgAddress={tour.img}
                title={tour.name}
                price={tour.price}
                dateType={tour.scheduleType}
                minGroupNumber={tour.minNumberOfGroup}
                maxGroupNumber={tour.maxNumberOfGroup}
                description={tour.description}
              ></TourCard>
            </SwiperSlide>
          ))}
          <SwiperSlide className={style.testSlide}>Slide 2</SwiperSlide>
          <SwiperSlide className={style.testSlide}>Slide 3</SwiperSlide>
          <SwiperSlide className={style.testSlide}>Slide 4</SwiperSlide>
          <SwiperSlide className={style.testSlide}>Slide 5</SwiperSlide>
          <SwiperSlide className={style.testSlide}>Slide 6</SwiperSlide>
          <SwiperSlide className={style.testSlide}>Slide 7</SwiperSlide>
        </Swiper>
        <div className="swiper-scrollbar__wrapper">
          <div className="swiper-scrollbar__content swiper-scrollbar__trips"></div>
        </div>
      </div>
    </section>
  );
}
