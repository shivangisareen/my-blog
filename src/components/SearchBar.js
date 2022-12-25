import "../components/styling/global.css";

import * as React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { InputBase } from "@mui/material";
import { container } from "../components/styling/searchBar.module.css";

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          color: "var(--textNormal)",
          borderColor: "var(--textNormal)",
        },
      },
    },
  },
});

const SearchBar = ({ handleSearchBarInputChange }) => {
  return (
    <div className={container}>
      <ThemeProvider theme={theme}>
        <InputBase
          placeholder="Search blogs"
          variant="outlined"
          size="medium"
          onChange={handleSearchBarInputChange}
          sx={{
            padding: "8px",
            border: "1px solid",
            height: "50px",
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default SearchBar;
