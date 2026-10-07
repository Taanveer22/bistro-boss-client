import Root from "../layouts/Root";
import { createBrowserRouter } from "react-router";

const webRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);

export default webRouter;
