import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectTour } from "../../../Slices/tours/toursSlice";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import style from "./GallerySection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function () {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(true);
  const swiperRef = useRef(null);
  const [slidesImgs, setSlidesImgs] = useState([{ imgs: [] }]);
  const tour = useSelector(selectTour);

  useEffect(() => {
    if (swiperRef.current) {
      setIsEnd(swiperRef.current.isEnd);
      setIsBeginning(swiperRef.current.isBeginning);
    }
  }, [slidesImgs]);

  useEffect(() => {
    const imgsCount = tour.imgs.length;
    let newSlidesImgs = [];
    let index = 0;
    for (let i = 4; i < imgsCount; i++) {
      newSlidesImgs.push({ imgs: [tour.imgs[i]] });
      if (i % 2 != 0) {
        if (i + 2 < imgsCount) {
          newSlidesImgs[index].imgs.push(tour.imgs[i + 1]);
          newSlidesImgs[index].imgs.push(tour.imgs[i + 2]);
          i += 2;
        } else if (i + 1 < imgsCount) {
          newSlidesImgs[index].imgs.push(tour.imgs[i + 1]);
          i++;
        }
      }
      index++;
    }
    setSlidesImgs(newSlidesImgs);
    console.log(slidesImgs);
  }, [tour]);

  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.header}>
          <h2 className="heading-secondary">Gallery</h2>
          <div className={style.btnContainer}>
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
            el: ".swiper-scrollbar__gallery",
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
            console.log("SlideChanged");
          }}
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
            720: {
              slidesPerView: 1.2,
            },
            528: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 0.7,
            },
          }}
        >
          {slidesImgs.map((imgSlide, index) => {
            const isOdd = index % 2 != 0;
            return (
              <SwiperSlide
                key={index}
                className={`${style.slideContainer} ${
                  isOdd
                    ? imgSlide.imgs.length == 3
                      ? style.slideContainerOddThreeImgs
                      : imgSlide.imgs.length == 2
                      ? style.slideContainerOddTwoImgs
                      : style.slideContainerOddOneImg
                    : ""
                }`}
              >
                {imgSlide.imgs.map((img, index) => {
                  return (
                    <div
                      key={index}
                      className={style.imgContainer}
                      style={{ backgroundImage: `url(${img})` }}
                    >
                      &nbsp;
                    </div>
                  );
                })}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-scrollbar__wrapper">
          <div className="swiper-scrollbar__gallery swiper-scrollbar__content"></div>
        </div>
      </div>
    </section>
  );
}
