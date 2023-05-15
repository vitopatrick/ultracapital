import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#030712",
      paper: "#111827",
    },
    primary: {
      main: "#047857",
    },
    secondary: {
      main: "#14b8a6",
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
