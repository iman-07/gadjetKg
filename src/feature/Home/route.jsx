import { Outlet } from "react-router-dom";
import Home from "../Home/route.jsx"

const HomeRoute = {
    path: "",
    element: <Outlet />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
    ],
};

export default HomeRoute;