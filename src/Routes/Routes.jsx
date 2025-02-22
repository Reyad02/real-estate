import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EachEstate from "../pages/EachEstate/EachEstate";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";
import Cart from "../pages/Cart/Cart";
import UserProfile from "../pages/UserProfile/UserProfile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

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
        loader: () => fetch('/Estate.json')
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch('/Estate.json')
      },
      {
        path: "/user-profile",
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path: "/update-profile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
    ]
  },
]);

export default router;