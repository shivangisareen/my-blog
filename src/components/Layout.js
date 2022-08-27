import React from "react";
import DarkToggle from "./DarkToggle";
import "./styling/global.css";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        transition: "color ease-out, background ease-out",
      }}
    >
      <DarkToggle />
      {children}
    </div>
  );
};

export default Layout;
