import Root from "../layouts/Root";
import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import ShopPage from "../pages/ShopPage";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../components/user/MyCart";

const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "menu",
        element: <MenuPage></MenuPage>,
      },
      {
        path: "shop/:menuCategory",
        element: <ShopPage></ShopPage>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);

export default publicRoutes;
