import React, { useEffect, useState } from "react";
import style from "./FormInput.module.scss";

export default function FormInput({
  id,
  className,
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
        id={id ? id : `#formInput${type}`}
        className={`${className} service-input__element`}
        type={type}
        placeholder={
          window.innerWidth > 1060 || !placeholderShort
            ? placeholder
            : placeholderShort
        }
      ></input>
    </div>
  );
}
