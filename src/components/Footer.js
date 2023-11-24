import React from "react";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: "#E8D9D9",
      },
    },
  });

  return <ThemeProvider theme={theme}></ThemeProvider>;
};

export default Footer;
