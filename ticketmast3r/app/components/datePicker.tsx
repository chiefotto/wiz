"use client";
import { Calendar } from "primereact/calendar";
import { useState } from "react";

export default function TicketDatePicker() {
  const [value, setValue] = useState<Date | null>(null);

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      month: "short", // "Oct"
      day: "numeric", // "26"
      year: "numeric", // "2025"
    });
  };

  return (
    <div>
      <Calendar
        value={value}
        onChange={(e) => setValue(e.value as Date)}
        dateFormat="M d, yy" // internal formatting for the input display
      />

      {/* Display formatted output */}
      {/* <p>{formatDate(value)}</p> */}
    </div>
  );
}
