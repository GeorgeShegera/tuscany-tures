import React, { useContext } from "react";
import style from "./Hero.module.scss";
import { SectionRefsContext } from "../../Providers/SectionRefsContext";

const Hero = ({ className, imgUrl, headingText, subHeadingText, children }) => {
  const { sectionBeforeHeader } = useContext(SectionRefsContext);

  return (
    <section
      ref={sectionBeforeHeader}
      className={`${className} ${style.hero}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${imgUrl})`,
      }}
    >
      <div className={style.content}>
        <h1 className="hero-heading_white mb-24">{headingText}</h1>
        <p className="hero-heading_sub">{subHeadingText}</p>
      </div>
      {children}
    </section>
  );
};
export default Hero;
