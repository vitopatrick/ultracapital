import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1e293b",
      paper: "#334155",
    },
    primary: {
      main: "#60a5fa",
    },
    secondary: {
      main: "#bfdbfe",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: ["Jost", "sans-serif"].join(","),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: ["Jost", "sans-serif"].join(","),
          textTransform: "capitalize",
        },
      },
    },
  },
});
