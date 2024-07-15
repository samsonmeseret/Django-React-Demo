import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import UsersPage from "./Pages/UsersPage";
import UserDetailsPage from "./Pages/UserDetailsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/users",
        element: <UsersPage />,
    },
    {
        path: "/users/:id",
        element: <UserDetailsPage />,
    },
]);
