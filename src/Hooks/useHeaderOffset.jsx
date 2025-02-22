import React, { useContext, useEffect, useState } from "react";
import { SectionRefsContext } from "../Providers/SectionRefsContext";

export default function useHeaderOffset() {
  const { header } = useContext(SectionRefsContext);
  const [offsetY, setOffsetY] = useState(null);

  useEffect(() => {
    function setHeaderOffset() {
      if (header) {
        setOffsetY(getComputedStyle(header).height);
      }
    }

    setHeaderOffset();

    window.addEventListener("resize", setHeaderOffset);

    return () => {
      window.removeEventListener("resize", setHeaderOffset);
    };
  }, [header]);
  return offsetY;
}
