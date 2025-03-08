import React, { useEffect, useRef, useState } from "react";
import style from "./BookingNav.module.scss";
import BookingNavBtn from "../../Components/BookingNavBtn/BookingNavBtn";
import { selectTour } from "../../Slices/tours/toursSlice";
import { useSelector } from "react-redux";
import { use } from "react";

export default function BookingNav({ className, selectedNav, setSelectedNav }) {
  const btnNums = ["Booking Details", "Your Details", "Payment"];
  const btns = useRef([]);
  const [progWidth1, setProgWidth1] = useState();
  const [progWidth2, setProgWidth2] = useState();
  const tour = useSelector(selectTour);

  useEffect(() => {
    function calculateDistance() {
      if (btns.current[0] && btns.current[1] && btns.current[2]) {
        const rect1 = btns.current[0].getBoundingClientRect();
        const rect2 = btns.current[1].getBoundingClientRect();
        const rect3 = btns.current[2].getBoundingClientRect();

        setProgWidth1(rect2.left - rect1.left);
        setProgWidth2(rect3.left - rect2.left);
      }
    }

    calculateDistance();
    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, [btns]);

  return (
    <section className={`${style.container} ${className}`}>
      {btnNums.map((value, index) => {
        return (
          <BookingNavBtn
            onClick={() => {
              const newSelectedNav = index + 1;
              let diff = newSelectedNav - selectedNav;
              const isNegative = diff < 0;
              if (isNegative) diff *= -1;

              for (let i = 0; i < diff; i++) {
                setTimeout(() => {
                  setSelectedNav((prevSelNav) =>
                    isNegative ? prevSelNav - 1 : prevSelNav + 1
                  );
                }, 300 * i);
              }
            }}
            selectedNav={selectedNav}
            key={`bookingNavBtn-${index}`}
            refLink={(el) => (btns.current[index] = el)}
            index={index + 1}
            value={value}
          ></BookingNavBtn>
        );
      })}

      <div
        className={`${style.progressLine} ${
          selectedNav >= 2 && style.progressLineFilled
        }`}
        style={{ width: progWidth1 }}
      ></div>
      <div
        className={`${style.progressLine} ${
          selectedNav === 3 && style.progressLineFilled
        }`}
        style={{ width: progWidth2, gridColumn: "2 / span 2" }}
      ></div>
    </section>
  );
}
