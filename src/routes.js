import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Deposit from "./pages/Deposit";
import Invest from "./pages/Invest";
import Withdraw from "./pages/Withdraw";
import Transactions from "./pages/TransactionsPage";
import Wallet from "./pages/Wallets";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/deposit",
    element: <Deposit />,
  },
  {
    path: "/invest",
    element: <Invest />,
  },
  {
    path: "/withdraw",
    element: <Withdraw />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/deposit/wallet",
    element: <Wallet />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
]);
