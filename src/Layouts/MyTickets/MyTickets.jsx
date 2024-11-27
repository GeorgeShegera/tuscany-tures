import React, { useEffect } from "react";
import style from "./MyTickets.module.scss";
import { getOrders, selectOrders } from "../../Slices/orders/orders";
import { useDispatch, useSelector } from "react-redux";
import { selectUserToken } from "../../Slices/user/UserSlice";

function MyTickets({ className }) {
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();
  const userToken = useSelector(selectUserToken);

  useEffect(() => {
    console.log(userToken);

    if (orders.length == 0 && userToken) {
      dispatch(getOrders(userToken));
    }
  }, []);

  return (
    <section className={`${className} ${style.section}`}>
      <h1 className="heading-secondary">My Tickets</h1>
    </section>
  );
}

export default MyTickets;
