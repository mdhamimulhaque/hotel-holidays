import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import Room from "../components/FeaturedRoom/FeaturedRoom";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
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
        loader: () => fetch('data.json'),
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
                path: '/booking',
                element: <Booking />
            },
            {
                path: '/contact',
            },
            {
                path: '/log-in',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            },
        ]
    }
])