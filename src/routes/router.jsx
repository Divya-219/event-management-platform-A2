import { createBrowserRouter } from "react-router-dom";
import {eventLoader,} from "../loaders/loaders";

import App from "../App";
import EventDetails from "../pages/EventDetails";
import Booking from "../pages/Booking";
import MyBookings from"../pages/MyBookings";
import Events from "../pages/Events";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/Profile";
import CreateEvent from "../pages/CreateEvent";
import {attendeeAction}from "../actions/bookingActions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/events/:id",
    element: <EventDetails />,
     loader: eventLoader,
    errorElement: <ErrorPage />,
  },
  {
  path: "/booking/:id",
  element: <Booking />,
    loader: eventLoader,
    action: attendeeAction,
     errorElement: <ErrorPage />,
},
 {
  path: "/my-bookings",
  element: <MyBookings />,

  errorElement: <ErrorPage />
  
},
{
 path:"/events",
 element:<Events/>,
 errorElement: <ErrorPage />
},
{
  path:"/profile",
  element:<Profile/>,

  errorElement: <ErrorPage />
},
{
  path: "/create-event",
  element: <CreateEvent />
},
{
  path: "*",
  element: <ErrorPage />
}
]);