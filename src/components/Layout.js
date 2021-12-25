import React from "react";
import DarkToggle from "./darkToggle";
import "../components/styling/global.css";

import { iconLayout } from "../components/styling/layout.module.css";

const Layout = ({children}) => {
      return (
        <div
          style={{
            backgroundColor: 'var(--bg)',
            transition: 'color ease-out, background ease-out',
          }}
        >
          <DarkToggle/>
          {children}
            
        </div>
      )
    }

export default Layout;

