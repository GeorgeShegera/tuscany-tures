import React, { useState } from "react";
import useHeaderOffset from "../../Hooks/useHeaderOffset";
import BookingNav from "../../Layouts/BookingNav/BookingNav";
import BookingDetails from "../../Layouts/BookingDetails/BookingDetails";

export default function Booking() {
  const headerOffset = useHeaderOffset();
  const [selectedNav, setSelectedNav] = useState(1);

  return (
    <main className="main" style={{ marginTop: headerOffset }}>
      <BookingNav
        className="main__section_space-between"
        selectedNav={selectedNav}
        setSelectedNav={setSelectedNav}
      ></BookingNav>
      {selectedNav === 1 && (
        <BookingDetails className="main__section_space-between"></BookingDetails>
      )}
    </main>
  );
}
