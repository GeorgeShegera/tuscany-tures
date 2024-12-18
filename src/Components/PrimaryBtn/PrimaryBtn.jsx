import React, { useEffect, useState } from "react";
import style from "./PrimaryBtn.module.scss";

export default function PrimaryBtn({
  className,
  children,
  onClick,
  type = "primary",
}) {
  const [btnStyle, setBtnStyle] = useState(selectStyle());

  function selectStyle() {
    switch (type) {
      case "primary":
        return style.button;
      case "transparent":
        return style.buttonTransparent;
      case "white":
        return style.buttonWhite;
    }
  }

  return (
    <a
      href="#"
      className={`${className} ${btnStyle}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
}
