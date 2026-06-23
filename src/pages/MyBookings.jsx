import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import BookingCard from "../components/BookingCard";


function MyBookings() {
const [filter, setFilter] =useState("all");
 const { 
    data: bookings = [],
    isLoading,
    isError
  } = useQuery({

    queryKey: ["bookings"],

    queryFn: async () => {

      const res = await fetch(
        "http://localhost:3000/bookings?userId=user1"
      );

      return res.json();
    },

    staleTime: 1000 * 60 * 5,

    gcTime: 1000 * 60 * 10

  });

  if (isLoading)
    return <h2>Loading...</h2>;

  if (isError)
    return <h2>Error loading bookings</h2>;

  let filteredBookings = bookings;

  if (filter === "cancelled") {

    filteredBookings =
      bookings.filter(
        booking =>
          booking.status === "cancelled"
      );
  }

  if (filter === "upcoming") {

    filteredBookings =
      bookings.filter(
        booking =>
          new Date(booking.eventDate) >
          new Date()
      );
  }

  if (filter === "past") {

    filteredBookings =
      bookings.filter(
        booking =>
          new Date(booking.eventDate) <
          new Date()
      );
  }

  return (

    <div className="my-bookings-page">

      <h1>
        My Bookings
      </h1>

      <div className="booking-filters">

        <button
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          onClick={() =>
            setFilter("upcoming")
          }
        >
          Upcoming
        </button>

        <button
          onClick={() =>
            setFilter("past")
          }
        >
          Past
        </button>

        <button
          onClick={() =>
            setFilter("cancelled")
          }
        >
          Cancelled
        </button>

      </div>

      {filteredBookings.map((booking) => (

        <BookingCard
          key={booking.id}
          booking={booking}
        />

      ))}

    </div>

  );
}

export default MyBookings;