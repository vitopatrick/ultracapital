import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1e1e1e",
      paper: "#2f2f2f",
    },
    primary: {
      main: "#ede2d4",
    },
    secondary: {
      main: "#7c6f55",
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
