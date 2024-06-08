import React from "react";
import style from "./PrimaryBtn.module.scss";

export default function PrimaryBtn({ className, children, onClick }) {
  return (
    <a
      href="#"
      className={`${className} ${style.button}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
}
