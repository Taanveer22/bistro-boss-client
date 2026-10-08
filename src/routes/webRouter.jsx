import Root from "../layouts/Root";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";

const webRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);

export default webRouter;
