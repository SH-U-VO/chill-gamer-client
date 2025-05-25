import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage"
import AllReview from "../pages/AllReview";
import AddReview from "../pages/AddReview";
import MyReview from "../pages/MyReview";
import GameWatchlist from "../pages/GameWatchlist";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CardDetails from "../pages/CardDetails";
import UpdateMyReview from "../components/UpdateMyReview";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,

    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
        loader: () => fetch('http://localhost:3000/games'),
      },
      {
        path: '/allReview',
        element: <AllReview />,
        loader: () => fetch('http://localhost:3000/games'),

      },
      {
        path: '/addReview',
        element: <AddReview />,
        loader: () => fetch('http://localhost:3000/users')
      },
      {
        path: '/myReview',
        element: <MyReview />,
        loader: () => fetch('http://localhost:3000/games'),

      },
      {
        path: '/gameWatchlist',
        element: <GameWatchlist />,
        loader: () => fetch('http://localhost:3000/games'),
      },
      {
        path: '/login',
        element: <Login />

      },
      {
        path: '/register',
        element: <Register />

      },
      {
        path: '/game/:id',
        element: <CardDetails />,
        loader: () => fetch('http://localhost:3000/games'),
      },
      {
        path: '/updateGame/:id',
        element: <UpdateMyReview />,
        loader: ({params}) => fetch(`http://localhost:3000/games/${params.id}`)
      }
    ]
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;