import Root from "../layouts/Root";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import FoodMenu from "../pages/FoodMenu";
import FoodOrder from "../pages/FoodOrder";

const webRouter = createBrowserRouter([
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
        path: "/order",
        element: <FoodOrder></FoodOrder>,
      },
    ],
  },
]);

export default webRouter;
