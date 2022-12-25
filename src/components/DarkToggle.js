import Button from "@mui/material/Button";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const DarkToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div>
          <Button
            onClick={(e) =>
              theme === "light"
                ? toggleTheme("basic_dark")
                : toggleTheme("light")
            }
          >
            {theme === "basic_dark" ? (
              <WbSunnyIcon fontSize="large" style={{ color: "darkorange" }} />
            ) : (
              <DarkModeIcon fontSize="large" />
            )}
          </Button>
        </div>
      )}
    </ThemeToggler>
  );
};

export default DarkToggle;
