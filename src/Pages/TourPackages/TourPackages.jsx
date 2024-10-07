import { useContext, useEffect, useRef, useState } from "react";
import ToursPackages from "../../Layouts/TourPackages/ToursPackages";
import { SectionRefsContext } from "../../Providers/SectionRefsContext";

export default function TourPackages() {
  const { header } = useContext(SectionRefsContext);
  const [offsetY, setOffsetY] = useState(null);

  useEffect(() => {
    console.log(header);
    if (header) {
      setOffsetY(getComputedStyle(header).height);
    }
  }, [header]);

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
