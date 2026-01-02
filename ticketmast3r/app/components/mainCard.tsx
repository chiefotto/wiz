"use client";
import styles from "./ticketpage.module.css";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { getGameInfoForToday } from "./mainText";
import { gamesData } from "./wizardsSchedule";

export function MainCard() {
  const [showLoader, setShowLoader] = useState(false);

  const handleImageClick = () => {
    setShowLoader(true);
  };

  const handleOverlayClick = () => {
    setShowLoader(false);
  };
  const fields = ["SEC", "ROW", "SEAT"];

  // Then call this whenever you need it

  const todayGame = getGameInfoForToday(gamesData);
  console.log(todayGame);

  return (
    <div className={styles.main}>
      <div className={styles.ticketCard} style={{ color: "white" }}>
        {/* <p className={styles.adult}> Adult</p> */}

        <div className={styles.ticketInfoSection}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",

              whiteSpace: "nowrap", // keep everything on one line

              // marginTop: -10,
              paddingBottom: 30,
              marginTop: -30,
            }}
          >
            {" "}
            <p className={styles.adult}> Verified Resale Ticket</p>
          </div>

          <div className={styles.ticketInfoRow}>
            {fields.map((label) => (
              <div key={label} className={styles.ticketInfoColumn}>
                <span className={styles.ticketInfoLabel}>{label}</span>
              </div>
            ))}
          </div>
          <div className={styles.ticketInfoRow}>
            {fields.map((label) => (
              <div key={label} className={styles.ticketInfoColumn}>
                <InputText
                  className={styles.ticketInput}
                  placeholder={label === "ROW" ? "J" : "11"} // or dynamic
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className={styles.ticketBody}
          // style={{ backgroundImage: "url('/cap1bannerwiz2.png')" }}
          style={{ backgroundImage: "url('/wizbanner2.png')" }}
        >
          {/* <div className="justify-center mb-3" style={{ fontSize: "20px" }}> */}
          <div className={styles.matchup}>
            Wizards vs {todayGame?.awayTeam || "no game"}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // or "flex-start" if you want it left aligned
              width: "100%",
              fontSize: "14px",
              whiteSpace: "nowrap", // keep everything on one line
              gap: 4,
            }}
          >
            {todayGame?.day}
            <span>,</span>
            {todayGame?.month} {todayGame?.dayDate}, {todayGame?.year},
            <span>·</span>
            {todayGame?.time}
            <span>·</span>
            {todayGame?.loc}
          </div>
        </div>
        <div>
          <>
            <img
              src="/hqview2.png" // assuming in /public
              alt="High Quality View"
              onClick={handleImageClick}
              style={{ cursor: "pointer", width: "100%", display: "block" }}
            />

            {showLoader && (
              <div
                onClick={handleOverlayClick}
                style={{
                  position: "fixed",
                  inset: 0,
                  background: "rgba(0,0,0,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 9999,
                }}
              >
                {/* Click anywhere on this dark layer to close */}
                <ProgressSpinner
                  style={{ width: "60px", height: "60px" }}
                  strokeWidth="4"
                />
              </div>
            )}
          </>

          <img
            src="/transfersell2.png" // assuming in /public
            style={{ cursor: "pointer", width: "100%", display: "block" }}
          />
        </div>
      </div>
    </div>
  );
}
