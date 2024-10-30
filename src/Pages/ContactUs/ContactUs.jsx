import React from "react";
import ContactUsCTA from "../../Layouts/ContactUsCTA/ContactUsCTA";
import useHeaderOffset from "../../Hooks/useHeaderOffset";
import style from "./ContactUs.module.scss";

function ContactUs() {
  const offsetY = useHeaderOffset();

  return (
    <main style={{ paddingTop: offsetY }} className={style.main}>
      <ContactUsCTA className="main__section_full-width"></ContactUsCTA>
    </main>
  );
}

export default ContactUs;
