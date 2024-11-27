import React from "react";
import useHeaderOffset from "../../Hooks/useHeaderOffset";
import MyTickets from "../../Layouts/MyTickets/MyTickets";

export default function TicketsPage() {
  const offsetY = useHeaderOffset();

  return (
    <main
      className="main"
      style={{
        paddingTop: offsetY,
      }}
    >
      <MyTickets className="main__section_space-between"></MyTickets>
    </main>
  );
}
