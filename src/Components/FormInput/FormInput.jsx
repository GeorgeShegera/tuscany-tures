import React, { useEffect, useState } from "react";
import style from "./FormInput.module.scss";

export default function FormInput({
  type,
  labelText,
  placeholder,
  placeholderShort,
}) {
  return (
    <div className="service-input__wrapper">
      <label htmlFor={`#formInput${type}`} className="service-input__label">
        {labelText}
      </label>
      <input
        id={`#formInput${type}`}
        className="service-input__element"
        type={type}
        placeholder={window.innerWidth > 1060 ? placeholder : placeholderShort}
      ></input>
    </div>
  );
}
