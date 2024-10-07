import React, { createContext, useEffect, useRef, useState } from "react";

export const SectionRefsContext = createContext();

export const SectionRefsProvider = ({ children }) => {
  const [introSection, setIntroSection] = useState(null);
  const [header, setHeader] = useState(null);

  const sectionHero = useRef(null);
  const sectionForm = useRef(null);

  return (
    <SectionRefsContext.Provider
      value={{
        sectionHero,
        sectionForm,
        header,
        setHeader,
        introSection,
        setIntroSection,
      }}
    >
      {children}
    </SectionRefsContext.Provider>
  );
};
