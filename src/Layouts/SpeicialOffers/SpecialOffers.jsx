import React from "react";
import style from "./SpecialOffers.module.scss";
import PrimaryBtn from "../../Components/PrimaryBtn/PrimaryBtn";

function SpecialOffers({ className }) {
  return (
    <section className={`${className} ${style.section}`}>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className="heading-secondary">
            Get Special Offers for Organizations
          </h2>
          <p className={style.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <PrimaryBtn className={style.btn} onClick={(e) => {}}>
            Contact Us
          </PrimaryBtn>
        </div>
        <div className={style.img}>
          <img src="./imgs/special-offers.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
