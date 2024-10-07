import { useContext, useEffect, useRef, useState } from "react";
import ToursPackages from "../../Layouts/TourPackages/ToursPackages";
import { SectionRefsContext } from "../../Providers/SectionRefsContext";
import useHeaderOffset from "../../Hooks/useHeaderOffset";

export default function TourPackages() {
  const offsetY = useHeaderOffset();

  return (
    <main
      className="main"
      style={{
        marginTop: offsetY,
      }}
    >
      <ToursPackages className="main__section_space-between"></ToursPackages>
    </main>
  );
}
