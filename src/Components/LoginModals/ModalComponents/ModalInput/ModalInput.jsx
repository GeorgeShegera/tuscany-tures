import React, { useState } from "react";
import style from "./ModalInput.module.css";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";

export default function ModalInput({
  label,
  placeholder,
  isPassword,
  value,
  setValue,
  id,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className={style.inputContainer}>
      <label className={style.inputLabel}>{label}</label>
      <div className={style.inputWrapper}>
        <input
          type={isPassword ? (showPassword ? "text" : "password") : "text"}
          placeholder={placeholder}
          id={id}
          className={style.inputModal}
          value={value}
          onChange={(e) => {
            dispatch(setValue(e.target.value));
          }}
        />
        {isPassword ? (
          showPassword ? (
            <AiFillEyeInvisible
              className={style.showPassword}
              onClick={toggleShowPassword}
            />
          ) : (
            <AiFillEye
              className={style.showPassword}
              onClick={toggleShowPassword}
            />
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
