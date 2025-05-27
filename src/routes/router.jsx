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
        loader: () => fetch('http://localhost:3000/games'),
      },
      {
        path: '/allReview',
        element: (
          <PrivateRoute>
            <AllReview />
          </PrivateRoute>
        ),
        loader: () => fetch('http://localhost:3000/games'),

      },
      {
        path: '/addReview',
         element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
        loader: () => fetch('http://localhost:3000/users')
      },
      {
        path: '/myReview',
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
        loader: () => fetch('http://localhost:3000/games'),

      },
      {
        path: '/gameWatchlist',
         element: (
          <PrivateRoute>
            <GameWatchlist />
          </PrivateRoute>
        ),
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
         element: (
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        ),
        loader: () => fetch('http://localhost:3000/games'),
      },
      {
        path: '/updateGame/:id',
        element: (
          <PrivateRoute>
            <UpdateMyReview />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/games/${params.id}`)
      }
    ]
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;