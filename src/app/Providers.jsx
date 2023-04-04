"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./muiTheme";

export default function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <div>{children}</div>
    </ThemeProvider>
  );
}
