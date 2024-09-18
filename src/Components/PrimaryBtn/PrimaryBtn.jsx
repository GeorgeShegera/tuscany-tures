import React from "react";
import style from "./PrimaryBtn.module.scss";

export default function PrimaryBtn({
  className,
  children,
  onClick,
  IsWhite = false,
}) {
  return (
    <a
      href="#"
      className={`${className} ${IsWhite ? style.buttonWhite : style.button}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
}
