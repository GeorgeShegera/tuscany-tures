import React, { useContext, useEffect, useState } from "react";
import { SectionRefsContext } from "../Providers/SectionRefsContext";

export default function useHeaderOffset() {
  const { header } = useContext(SectionRefsContext);
  const [offsetY, setOffsetY] = useState(null);

  useEffect(() => {
    if (header) {
      setOffsetY(getComputedStyle(header).height);
    }
  }, [header]);
  return offsetY;
}
