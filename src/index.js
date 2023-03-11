// import the react components
import React from "react";
import ReactDOM from "react-dom";

//  import the react toastify css class
import "react-toastify/dist/ReactToastify.css";
import "./index.css";


// import the react router dom
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes"; 

// imports from material ui
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";


// import the user context that will Cover the applications and control authentication state
import UserProvider from "./context/UserContext";

ReactDOM.render(
  <UserProvider>
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </UserProvider>,
  document.getElementById("root")
);
