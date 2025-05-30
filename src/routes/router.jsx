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
import PrivateRoute from "../provider/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,

    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
        loader: () => fetch('https://chill-gamer-server-drab.vercel.app/games'),
      },
      {
        path: '/allReview',
        element: (
          <PrivateRoute>
            <AllReview />
          </PrivateRoute>
        ),
        loader: () => fetch('https://chill-gamer-server-drab.vercel.app/games'),

      },
      {
        path: '/addReview',
         element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
        loader: () => fetch('https://chill-gamer-server-drab.vercel.app/users')
      },
      {
        path: '/myReview',
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
        loader: () => fetch('https://chill-gamer-server-drab.vercel.app/games'),

      },
      {
        path: '/gameWatchlist',
         element: (
          <PrivateRoute>
            <GameWatchlist />
          </PrivateRoute>
        ),
        loader: () => fetch('https://chill-gamer-server-drab.vercel.app/games'),
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
         element: (
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        ),
        loader: () => fetch('https://chill-gamer-server-drab.vercel.app/games'),
      },
      {
        path: '/updateGame/:id',
        element: (
          <PrivateRoute>
            <UpdateMyReview />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://chill-gamer-server-drab.vercel.app/games/${params.id}`)
      }
    ]
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;