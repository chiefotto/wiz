"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ticketCarousel.module.css";
import { MainCard } from "./mainCard";

type Ticket = {
  id: string;
};

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function TicketCarousel() {
  // Start with 1 ticket
  const [tickets, setTickets] = useState<Ticket[]>([{ id: uid() }]);

  // Used to scroll to the end when adding
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const addTicket = () => {
    setTickets((prev) => [...prev, { id: uid() }]);
  };

  // Auto-scroll to the newest card after adding
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
  }, [tickets.length]);

  return (
    <section className={styles.wrapper}>
      {/* <button
        type="button"
        className={styles.addBtn}
        onClick={addTicket}
        aria-label="Add ticket"
        title="Add ticket"
      >
        here
      </button> */}

      <div className={styles.scroller} ref={scrollerRef}>
        {tickets.map((t) => (
          <div className={styles.snapItem} key={t.id}>
            {/* Pass props to MainCard if it needs them */}
            <MainCard />
          </div>
        ))}
      </div>

      <button
        type="button"
        className={styles.fab}
        onClick={addTicket}
        aria-label="Add ticket"
      >
        +
      </button>

      {/* <div className={styles.dots} aria-hidden="true">
        {/* optional hint, can remove */}
      {/* <span className={styles.hint}>Swipe left/right</span> */}
    </section>
  );
}
