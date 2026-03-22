import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        Component: MainLayout,
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    },
]);