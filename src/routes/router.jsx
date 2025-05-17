import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    loader: () => fetch('../game.json')
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;