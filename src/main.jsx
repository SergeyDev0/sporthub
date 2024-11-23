import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
    palette: {
        mode: "light",
    },
    breakpoints: {
        values: {
          xxs: 0, // small phone
          xs: 300, // phone
          sm: 600, // tablets
          md: 900, // small laptop
          lg: 1200, // desktop
          xl: 1536 // large screens
        }
    }
});

createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
);
