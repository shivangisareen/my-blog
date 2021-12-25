import React from "react";
import DarkToggle from "./darkToggle";

const Layout = ({children}) => {
      return (
        <div
          style={{
            transition: 'color ease-out, background ease-out',
          }}
        >
            <DarkToggle/>
            {children}
        </div>
      )
}

export default Layout;

