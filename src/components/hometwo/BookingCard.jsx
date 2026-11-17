import { useState } from "react";
import { boatOptions } from "../../data/data.js";

// Kartu "Book For Activities" (dipakai 1x di samping Welcome dan 3x di baris bawah)
export default function BookingCard() {
  const [boat, setBoat] = useState(boatOptions[0]);
  const [done, setDone] = useState(false);

  const start = () => {
    setDone(true);
    setTimeout(() => setDone(false), 1800);
  };

  return (
    <div className="book-card">
      <h4>Book For Activities</h4>
      <select value={boat} onChange={(e) => setBoat(e.target.value)}>
        {boatOptions.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <button className="btn-blue block" onClick={start}>
        {done ? "Booking: " + boat : "Start Booking"}
      </button>
    </div>
  );
}
