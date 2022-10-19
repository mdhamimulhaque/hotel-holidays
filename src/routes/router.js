import { createBrowserRouter } from "react-router-dom";
import Room from "../components/FeaturedRoom/FeaturedRoom";
import RoomDetails from "../components/RoomDetails/RoomDetails";
import Main from "../layouts/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/rooms',
                loader: () => fetch('data.json'),
                element: <Rooms />
            },
            {
                path: '/room/:id',
                element: <RoomDetails />
            },
            {
                path: '/blogs',
            },
            {
                path: '/contact',
            },
        ]
    }
])