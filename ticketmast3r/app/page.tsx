import Image from "next/image";
import { MainCard } from "./components/mainCard";
import TicketCarousel from "./components/ticketCarousel";

export default function Home() {
  return (
    <div>
      <main>
        {/* <MainCard></MainCard> */}
        <TicketCarousel></TicketCarousel>
      </main>
    </div>
  );
}
