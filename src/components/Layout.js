import "./styling/global.css";

import DarkToggle from "./DarkToggle";
import React from "react";

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
