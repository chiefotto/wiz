"use client";
import styles from "./ticketpage.module.css";
import { InputText } from "primereact/inputtext";
import TicketDatePicker from "./datePicker";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { ProgressSpinner } from "primereact/progressspinner";

export function MainCard() {
  const [showLoader, setShowLoader] = useState(false);

  const handleImageClick = () => {
    setShowLoader(true);
  };

  const handleOverlayClick = () => {
    setShowLoader(false);
  };
  const fields = ["SEC", "ROW", "SEAT"];
  const [selectedTeam, setSelectedTeam] = useState("");
  const teams: string[] = [
    "Bucks",
    "Bulls",
    "Cavaliers",
    "Celtics",
    "Clippers",
    "Grizzlies",
    "Hawks",
    "Heat",
    "Hornets",
    "Jazz",
    "Kings",
    "Knicks",
    "Lakers",
    "Magic",
    "Mavericks",
    "Nets",
    "Nuggets",
    "Pacers",
    "Pelicans",
    "Pistons",
    "Raptors",
    "Rockets",
    "76ers",
    "Spurs",
    "Suns",
    "Thunder",
    "Timberwolves",
    "Trail Blazers",
    "Warriors",
    "Wizards",
  ];

  return (
    <div className={styles.main}>
      <div className={styles.ticketCard} style={{ color: "white" }}>
        <p className={styles.adult}> Adult</p>

        <div className={styles.ticketInfoSection}>
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
          //   style={{ backgroundImage: "url('/cap1bannerwiz2.png')" }}
          style={{ backgroundImage: "url('/wizbannernew.png')" }}
        >
          {/* <div className="justify-center mb-3" style={{ fontSize: "20px" }}> */}
          <div className={styles.matchup}>
            Wizards vs.<span> </span>
            <Dropdown
              value={selectedTeam}
              options={teams}
              onChange={(e: { value: any }) => setSelectedTeam(e.value)}
              //   className={selectedTeam ? "p-dropdown-trigger" : " "}
            />
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
            {/* Day abbrev */}
            <InputText
              className="p-inputtext-sm"
              placeholder="Sat,"
              style={{
                width: "4ch", // just wide enough for "Sat,"
                background: "transparent",
                boxShadow: "none",
                color: "#fff",
                textAlign: "right",
              }}
            />
            {/* Date from your TicketDatePicker */}
            <span>
              <TicketDatePicker />
            </span>
            {/* Time */}
            <InputText
              className="p-inputtext-sm"
              placeholder="18:00"
              style={{
                width: "5ch", // just wide enough for "18:00"
                marginRight: "1px",
                border: "none",
                background: "transparent",
                boxShadow: "none",
                color: "#fff",
                textAlign: "left",
              }}
            />
            <span>•</span>

            {/* Dot + arena */}
            <span
              style={{
                marginLeft: "1px",
              }}
            >
              {" "}
              Capital One Arena
            </span>
          </div>
        </div>
        <div>
          <>
            <img
              src="/hqview.png" // assuming in /public
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
