import Root from "../layouts/Root";
import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyCart from "../components/dashboard/MyCart";
import PrivateRoute from "../routes/PrivateRoute";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import ShopPage from "../pages/ShopPage";

const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/menu",
        element: <MenuPage></MenuPage>,
      },
      {
        path: "/shop/:menuCategory",
        element: <ShopPage></ShopPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default publicRoutes;
