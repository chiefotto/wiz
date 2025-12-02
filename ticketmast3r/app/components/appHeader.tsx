import React from "react";

export function AppHeader() {
  return (
    <>
      <header
        // style={{
        //   backgroundColor: "#e8173a",
        //   paddingTop: "env(safe-area-inset-top)",
        // }}
        // className="sticky standalone:fixed top-0 left-0 right-0 z-10"
        className="fixed inset-x-0 top-0 z-20"
        style={{
          backgroundColor: "#e8173a",
          paddingTop: "env(safe-area-inset-top)",
        }}
      >
        {/* <div
          style={{ backgroundColor: "#e8173a" }}
          className="backdrop-blur-md border-b border-border px-4 py-3 flex justify-center standalone:pt-16"
        > */}
        <div className="px-4 py-3 flex justify-center ">
          <h1
            className="text-xl font-bold text-foreground"
            style={{ color: "white", fontWeight: "400", fontFamily: "Arial" }}
          >
            My Tickets
          </h1>
        </div>
      </header>

      <div className="h-0 standalone:h-[120px]" />
    </>
  );
}
