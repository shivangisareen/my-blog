import React from "react";
import DarkToggle from "./darkToggle";
import "../components/styling/global.css";

const Layout = ({children}) => {
      return (
        <div
          style={{
            backgroundColor: 'var(--bg)',
            color: 'var(--textNormal)',
            transition: 'color ease-out, background ease-out',
          }}
        >
            <DarkToggle/>
            {children}
        </div>
      )
}

export default Layout;

