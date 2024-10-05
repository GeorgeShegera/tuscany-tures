import React, { createContext, useEffect, useRef, useState } from "react";

export const SectionRefsContext = createContext();

export const SectionRefsProvider = ({ children }) => {
  const sectionBeforeHeader = useRef(null);
  const sectionNav = useRef(null);
  const sectionHero = useRef(null);
  const sectionForm = useRef(null);

  return (
    <SectionRefsContext.Provider
      value={{ sectionHero, sectionForm, sectionNav, sectionBeforeHeader }}
    >
      {children}
    </SectionRefsContext.Provider>
  );
};
