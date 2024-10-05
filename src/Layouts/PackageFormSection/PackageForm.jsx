import React, { forwardRef, useContext, useEffect } from "react";
import style from "./PackageForm.module.scss";
import FormInput from "../../Components/FormInput/FormInput";
import ServiceTypeSelector from "../../Components/ServiceTypeSelector/ServiceTypeSelector";
import DateSelector from "../../Components/DateSelector/DateSelector.jsx";
import ServiceTimePicker from "../../Components/ServiceTimePicker/ServiceTimePicker.jsx";
import PrimaryBtn from "../../Components/PrimaryBtn/PrimaryBtn.jsx";
import { SectionRefsContext } from "../../Providers/SectionRefsContext";

const PackageForm = ({ className }) => {
  const { sectionForm } = useContext(SectionRefsContext);

  return (
    <section className={`${className} ${style.section}`} ref={sectionForm}>
      <div className={style.wrapper}>
        <form method="post" action="post" className={style.formContainer}>
          <h2 className={`heading-secondary ${style.formHeading}`}>
            Book Now Bike
          </h2>
          <div className={style.form}>
            <FormInput
              type="text"
              labelText="Name and Surname"
              placeholder="Enter your name and surname"
              placeholderShort="Name and Surname"
            ></FormInput>
            <FormInput
              type="email"
              labelText="Email Address"
              placeholder="Enter your email address"
              placeholderShort="Email address"
            ></FormInput>
            <FormInput
              type="tel"
              labelText="Telephone Number"
              placeholder="Enter your telephone number"
              placeholderShort="Telephone number"
            ></FormInput>
            <ServiceTypeSelector
              className={`${style.serviceType}`}
              type="service"
              labelText="Service Type"
              placeholder="Select the types"
              services={["Book and rickshaw rental", "Taxi", "Bus Package"]}
            ></ServiceTypeSelector>
            <DateSelector
              className={`${style.serviceType} ${style.calendar}`}
              type="date"
              labelText="Date"
              placeholder="Select the date"
            ></DateSelector>
            <ServiceTimePicker
              className={`${style.timeSelector}`}
              type="time"
              labelText="Time"
              placeholder="Select the time"
            ></ServiceTimePicker>
            <PrimaryBtn
              className={style.submitbtn}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Book Now
            </PrimaryBtn>
          </div>
        </form>
        <div className={style.imgContainer}>
          <img className={style.img} src="./imgs/bike-picture.png" alt="bike" />
        </div>
      </div>
    </section>
  );
};

export default PackageForm;
