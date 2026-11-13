import Root from "../layouts/Root";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import FoodMenu from "../pages/FoodMenu";
import FoodShop from "../pages/FoodShop";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyCart from "../components/dashboard/MyCart";
import PrivateRoute from "../routes/PrivateRoute";

const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <FoodMenu></FoodMenu>,
      },
      {
        path: "/shop/:categoryName",
        element: <FoodShop></FoodShop>,
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
