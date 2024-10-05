import React, { useContext } from "react";
import style from "./SpecialOffers.module.scss";
import PrimaryBtn from "../../Components/PrimaryBtn/PrimaryBtn";
import { SectionRefsContext } from "../../Providers/SectionRefsContext";
import { behavior } from "@testing-library/user-event/dist/cjs/event/behavior/registry.js";

const SpecialOffers = ({ className }) => {
  const { sectionForm } = useContext(SectionRefsContext);

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
          <PrimaryBtn
            className={style.btn}
            onClick={(e) => {
              sectionForm.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us
          </PrimaryBtn>
        </div>
        <div className={style.img}>
          <img src="./imgs/special-offers.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
