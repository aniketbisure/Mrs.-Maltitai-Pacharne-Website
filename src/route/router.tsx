import LayoutThree from "@/layout/layoutThree";
import Error from "@/pages/404";
import HomeThreeSingle from "@/pages/home-three-single";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutThree />,
        children: [
            {
                path: "/",
                element: <HomeThreeSingle />
            },
        ]
    },
    {
        path:'*',
        element:<Error/>
    },
])