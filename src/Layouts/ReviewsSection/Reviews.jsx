import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initComments,
  selectComments,
} from "../../Slices/comments/commentsSlice";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import style from "./Reviews.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function ({ tourId = null }) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(true);
  const swiperRef = useRef(null);
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();

  useEffect(() => {
    if (swiperRef.current) {
      setIsEnd(swiperRef.current.isEnd);
      setIsBeginning(swiperRef.current.isBeginning);
    }
  }, [comments]);

  useEffect(() => {
    dispatch(initComments(tourId));
  }, [tourId]);

  return (
    <section className={style.section}>
      <div className="container">
        <div className="swiper-header">
          <h2 className="heading-secondary swiper-header__title">
            Happy Customers Says
          </h2>
          <div className="swiper-header__btn-container">
            <button
              className={`swiper-btn ${
                isBeginning ? "swiper-btn_disabled" : ""
              }`}
              onClick={() => swiperRef.current.slidePrev()}
            >
              <GoChevronLeft />
            </button>
            <button
              className={`swiper-btn ${isEnd ? "swiper-btn_disabled" : ""}`}
              onClick={() => swiperRef.current.slideNext()}
            >
              <GoChevronRight />
            </button>
          </div>
        </div>

        <Swiper
          className={style.swiper}
          spaceBetween={20}
          slidesPerView={2}
          modules={[Navigation, Scrollbar]}
          direction={"horizontal"}
          scrollbar={{
            el: ".swiper-scrollbar__comments",
            draggable: true,
            dragSize: 120,
          }}
          ref={swiperRef}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
            720: {
              slidesPerView: 1.2,
            },
            0: {
              slidesPerView: 1,
              scrollbar: {
                dragSize: 60,
              },
            },
          }}
        >
          {comments.map((comment, index) => {
            return (
              <SwiperSlide key={index} className={style.slide}>
                <div className={style.container}>
                  <figure className={style.userContent}>
                    <img
                      className={style.userPhoto}
                      src={comment.avatarUrl}
                      alt={`${comment.Name}'s avatar`}
                    />
                    <figcaption className={style.userName}>
                      {comment.name} <br /> {comment.surname}
                    </figcaption>
                  </figure>
                  <p className={style.reviewText}>{comment.text}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-scrollbar__wrapper">
          <div className="swiper-scrollbar__comments swiper-scrollbar__content"></div>
        </div>
      </div>
    </section>
  );
}
