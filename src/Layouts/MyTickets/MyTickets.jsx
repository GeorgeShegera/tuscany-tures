import React, { useEffect } from "react";
import style from "./MyTickets.module.scss";
import { getOrders, selectOrders } from "../../Slices/orders/orders";
import { useDispatch, useSelector } from "react-redux";
import { selectUserToken } from "../../Slices/user/UserSlice";
import TicketCard from "../../Components/TicketCard/TicketCard";

function MyTickets({ className }) {
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();
  const userToken = useSelector(selectUserToken);

  useEffect(() => {
    console.log(userToken);
    if (orders.length == 0 && userToken) {
      dispatch(getOrders(userToken));
    }
  }, [userToken]);

  return (
    <section className={`${className} ${style.section} container`}>
      <h1 className="heading-secondary">My Tickets</h1>
      <div className={style.table}>
        <div className={style.tableHeader}>
          <p className={style.cell}>Tour Name</p>
          <p className={style.cell}>Payment Method</p>
          <p className={style.cell}>Price</p>
          <p className={style.cell}>Status</p>
        </div>
        {orders.map((order) => {
          console.log(order);
          return (
            <TicketCard
              dateTime={order.dateTime}
              img={order.img}
              price={order.price}
              paymentMethod={order.paymentMethod}
              status={order.status}
              tourName={order.tourName}
            ></TicketCard>
          );
        })}
      </div>
    </section>
  );
}

export default MyTickets;
