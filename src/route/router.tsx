import LayoutThree from "@/layout/layoutThree";
import Error from "@/pages/404";
import HomeThreeSingle from "@/pages/home-three-single";
import { createBrowserRouter } from "react-router-dom";

import TermsAndConditions from "@/pages/terms-and-conditions";
import PrivacyPolicy from "@/pages/privacy-policy";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutThree />,
        children: [
            {
                path: "/",
                element: <HomeThreeSingle />
            },
            {
                path: "/terms-and-conditions",
                element: <TermsAndConditions />
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />
            },
        ]
    },
    {
        path: '*',
        element: <Error />
    },
])