import React from "react";
import style from "./ContactUsCTA.module.scss";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";
import FormInput from "../../Components/FormInput/FormInput";
import PrimaryBtn from "../../Components/PrimaryBtn/PrimaryBtn";

function ContactUsCTA({ className }) {
  return (
    <section className={`${className} ${style.section}`}>
      <div className={style.content}>
        <div className={style.infoWrapper}>
          <h1 className={`${style.heading} heading-primary`}>Get In Touch!</h1>
          <p className={style.info}>
            Fill up the form and our Team will get back to you within 24 hours
          </p>
          <div className={style.links}>
            <a className={style.link} href="#">
              <IoLocationSharp className={style.icon} />
              <span className={style.linkText}>
                Piazza Napoleone, Lucca, Tuscany
              </span>
            </a>
            <a className={style.link} href="tel: +39346368570">
              <BsTelephoneFill className={style.icon} />
              <span className={style.linkText}>+39 346 368 5708</span>
            </a>
            <a className={style.link} href="mailto: italianlimo@gmail.com">
              <TbMailFilled className={style.icon} />
              <span className={style.linkText}>italianlimo@gmail.com</span>
            </a>
          </div>
        </div>
        <form action="post" className={style.contactForm}>
          <FormInput
            id="contactUsEmail"
            className={style.formInput}
            type="input"
            labelText="Name and Surname"
            placeholder="Enter your name and surname"
            placeholderShort="Enter name an surname"
          ></FormInput>
          <FormInput
            id="contactUsNameSurname"
            className={style.formInput}
            type="input"
            labelText="Email Address"
            placeholder="Enter your email adress"
          ></FormInput>
          <div className="service-input__wrapper">
            <label htmlFor="#message" className="service-input__label">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your Message"
              className={`${style.formMessage} service-input__element`}
            ></textarea>
          </div>
          <PrimaryBtn className={style.sendMessage}>Send Message</PrimaryBtn>
        </form>
      </div>
    </section>
  );
}

export default ContactUsCTA;
