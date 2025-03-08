import React, { useEffect } from "react";
import style from "./BookingDetails.module.scss";
import TicketsCounter from "../../Components/TicketsCounter/TicketsCounter";
import { selectTour } from "../../Slices/tours/toursSlice";
import {
  setAdultTickets,
  setChildTickets,
  setInfantTickets,
  selectOrder,
} from "../../Slices/orders/orders";
import { useSelector } from "react-redux";

export default function BookingDetails({ className }) {
  const tour = useSelector(selectTour);
  const order = useSelector(selectOrder);
  console.log(tour, order);

  return (
    <section className={`${className} ${style.section} container`}>
      <div className={style.ticketsSelect}>
        <div className={style.ticketsHeader}>
          <h1 className="heading-tertiary">Select Your Tickets</h1>
          <ul className={style.headerList}>
            <li>Free for kids under 6 and disabled visitors</li>
            <li>
              Pregnant women, families with strollers, and visitiors on crutches
              can buy priority tickets at the venue
            </li>
          </ul>
        </div>
        <ul></ul>
      </div>
      <div className={style.ticketsOverview}>
        <TicketsCounter
          header="Adult (18+)"
          details={null}
          price={tour.adultPrice}
          value={order.adultTickets}
          setValue={setAdultTickets}
        ></TicketsCounter>
        <TicketsCounter
          header="Child (6-17)"
          details={["With valid ID", "Only in combination with: Adult(18+)"]}
          price={tour.childPrice}
          value={order.childTickets}
          setValue={setChildTickets}
        ></TicketsCounter>
        <TicketsCounter
          header="Infant (0-5)"
          details={["Only in combination with: Adult (18+)"]}
          price={tour.infantPrice}
          value={order.infantTickets}
          setValue={setInfantTickets}
        ></TicketsCounter>
      </div>
    </section>
  );
}
