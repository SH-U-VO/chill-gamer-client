import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage"
import AllReview from "../pages/AllReview";
import AddReview from "../pages/AddReview";
import MyReview from "../pages/MyReview";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    
    children: [
      {
        path:'/',
        element: <HomePage></HomePage>,
        loader: () => fetch('../game.json'),
      },
      {
        path:'/allReview',
        element: <AllReview />,
        loader: () => fetch('../game.json'),
        
      },
      {
        path:'/addReview',
        element: <AddReview />
      
      },
      {
        path:'/myReview',
        element: <MyReview />
      
      },
    ]
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;