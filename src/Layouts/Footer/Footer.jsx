import React from "react";
import style from "./Footer.module.scss";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer({ className }) {
  return (
    <footer className={`${className} ${style.footer}`}>
      <div className={style.container}>
        <a href="#" className={style.logoWrapper}>
          <img src="/imgs/tuscanyLogo.png" alt="Logo" />
        </a>
        <div className={style.content}>
          <div className={style.columnWrapper}>
            <p className={style.title}>Services</p>
            <ul className={style.itemList}>
              <li classname={style.item}>
                <a href="#">Bike and Rickshaw rental</a>
              </li>
              <li classname={style.item}>
                <a href="#">Guided Tours of Lucca</a>
              </li>
              <li classname={style.item}>
                <a href="#">Guided Bike Tour of Lucca</a>
              </li>
              <li classname={style.item}>
                <a href="#">Trip In The Tuscan Hills</a>
              </li>
              <li classname={style.item}>
                <a href="#">Transportation With Luxury Cars</a>
              </li>
              <li classname={style.item}>
                <a href="#">Wine Tours By Bus With Guide</a>
              </li>
            </ul>
          </div>
          <div className={style.columnWrapper}>
            <p className={style.title}>Home</p>
            <ul className={style.itemList}>
              <li classname={style.item}>
                <a href="#">Home</a>
              </li>
              <li classname={style.item}>
                <a href="#">About us</a>
              </li>
              <li classname={style.item}>
                <a href="#">Tour Packages</a>
              </li>
            </ul>
          </div>
          <div className={style.columnWrapper}>
            <p className={style.title}>Help</p>
            <ul className={style.itemList}>
              <li classname={style.item}>
                <a href="#">Terms of Use</a>
              </li>
              <li classname={style.item}>
                <a href="#">Provicy Policy</a>
              </li>
            </ul>
          </div>
          <div className={`${style.columnWrapper} ${style.contacts}`}>
            <p className={style.title}>Contacts</p>
            <ul className={style.itemList}>
              <li classname={style.item}>
                <a href="#">
                  <IoLocationSharp className={style.icon} />{" "}
                  <span>Piazza Napoleone, Lucca, Tuscany</span>
                </a>
              </li>
              <li classname={style.item}>
                <a href="tel: +393463685708">
                  <BsTelephoneFill className={style.icon} />
                  <span> +39 346 368 5708</span>
                </a>
              </li>
              <li classname={style.item}>
                <a href="mailto: italianlimo@gmail.com">
                  <TbMailFilled className={style.icon} />
                  <span>italianlimo@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={`${style.columnWrapper} ${style.social}`}>
            <p className={style.title}>Social Media</p>
            <ul className={style.itemList}>
              <li classname={style.item}>
                <a href="#">
                  <BsTwitterX className={style.socialIcon} />
                </a>
              </li>
              <li classname={style.item}>
                <a href="tel: +393463685708">
                  <FaFacebookF className={style.socialIcon} />
                </a>
              </li>
              <li classname={style.item}>
                <a href="mailto: italianlimo@gmail.com">
                  <FaInstagram className={style.socialIcon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className={style.copyright}>
          Copyright &copy; 2024. All rights reserved
        </p>
      </div>
    </footer>
  );
}
