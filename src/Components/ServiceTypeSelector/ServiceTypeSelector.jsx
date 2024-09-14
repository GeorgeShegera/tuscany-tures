import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  selectServiceType,
  setServiceType,
} from "../../Slices/servicesForm/servicesFormSlice";

export default function ServiceTypeSelector({
  className,
  type,
  labelText,
  placeholder,
  services,
}) {
  const [openDropdown, setOpenDropdown] = useState();
  const selectorList = useRef();
  const dispatch = useDispatch();
  const serviceType = useSelector(selectServiceType);

  useEffect(() => {
    let handler = (e) => {
      if (!selectorList.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const checkSetValue = () => serviceType !== null;

  return (
    <div className={`service-input__wrapper ${className}`}>
      <label htmlFor={`#formInput${type}`} className="service-input__label">
        {labelText}
      </label>
      <div
        className="service-input__selector-wrapper"
        ref={selectorList}
        onClick={() => {
          setOpenDropdown(!openDropdown);
        }}
      >
        <div
          id={`#formInput${type}`}
          className={`service-input__selector ${
            openDropdown ? "service-input__selector_open" : ""
          } ${checkSetValue() ? "service-input__selector_set-value" : ""}`}
          type={type}
        >
          {!checkSetValue() ? placeholder : serviceType}
          <IoIosArrowDown className="service-input__icon-arrow" />
        </div>
        <ul className="service-list">
          {services.map((service, index) => (
            <li
              key={index}
              className="service-list__item"
              onClick={() => {
                dispatch(setServiceType(service));
              }}
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
