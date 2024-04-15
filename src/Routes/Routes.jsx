import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EachEstate from "../pages/EachEstate/EachEstate";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
          path: "/estate/:id",
          element: <PrivateRoute><EachEstate></EachEstate></PrivateRoute>,
          loader: ()=> fetch('/Estate.json')
        }
      ]
    },
  ]);

export default router;