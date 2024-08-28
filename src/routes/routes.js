import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login, { loader as loadLoginContent } from "../pages/Login";
import Signup, { loader as loadSignupContent } from "../pages/Signup";
import Posts, { loader as loadPostsContent } from "../pages/Posts";
import Homepage, { loader as loadHomepageContent } from "../pages/Homepage";
import Profile from "../pages/Profile";
import { loader as loadNavbarContent } from "../components/Navbar";
import MainLayout from "./MainLayout";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: loadNavbarContent,
    children: [
      { index: true, element: <Homepage />, loader: loadHomepageContent },
      { path: "/posts", element: <Posts />, loader: loadPostsContent },
      {
        path: "/profile",
        element: <ProtectedRoute element={<Profile />} />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: loadLoginContent,
  },
  {
    path: "/signup",
    element: <Signup />,
    loader: loadSignupContent,
  },
]);

function RouterComponent() {
  return <RouterProvider router={router} />;
}

export default RouterComponent;
