import { ThemeProvider, createTheme } from "@mui/material/styles";
import { white, cream } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f5eed4",
      light: "#e8d8ab",
      dark: "#645e43",
    },
    secondary: {
      main: "#8d6e63",
    },
    custom: {
      light: "#ffa726",
      main: "#f57c00",
      dark: "#ef6c00",
      contrastText: "rgba(0, 0, 0, 0.9)",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        fontWeight: "normal",
      },
    },
  },
});

export default theme;
