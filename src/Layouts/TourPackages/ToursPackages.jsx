import React, { useEffect, useState } from "react";
import style from "./ToursPackages.module.scss";

export default function ToursPackages({ className }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const header = document.getElementsByTagName("header");
    if (header) {
      setOffsetY(getComputedStyle(header[0]).height);
    }
  }, [document.getElementsByTagName("header")]);

  return (
    <section
      className={`${className} ${style.section}`}
      style={{
        marginTop: offsetY,
      }}
    >
      <h2 className="heading-secondary">Tour Packages</h2>
      <div className={style.content}></div>
    </section>
  );
}
