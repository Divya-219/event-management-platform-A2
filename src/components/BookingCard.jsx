import {useMutation, useQueryClient} from "@tanstack/react-query";

function BookingCard({ booking }) {

  const queryClient =useQueryClient();

  const cancelMutation = useMutation({

      mutationFn: async () => {

        await fetch(
          `http://localhost:3000/bookings/${booking.id}`,
          {
            method: "PATCH",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              status: "cancelled"
            })
          }
        );
      },

      onMutate: async () => {

        const previousBookings =
          queryClient.getQueryData(
            ["bookings"]
          );

        queryClient.setQueryData(
          ["bookings"],
          old =>
            old.map(item =>
              item.id === booking.id
                ? {
                    ...item,
                    status: "cancelled"
                  }
                : item
            )
        );

        return {
          previousBookings
        };
      },

      onError: (
        error,
        variables,
        context
      ) => {

        queryClient.setQueryData(
          ["bookings"],
          context.previousBookings
        );
      }

    });

  return (

    <div className="booking-card">

      <h2>
        {booking.eventTitle}
      </h2>

      <p>
        Date:
        {" "}
        {booking.eventDate}
      </p>

      <p>
        Reference:
        {" "}
        {booking.referenceNumber}
      </p>

      <p>
        Status:
        {" "}
        {booking.status}
      </p>

      {booking.status !==
        "cancelled" && (

        <button
          onClick={() =>
            cancelMutation.mutate()
          }
        >
          Cancel Booking
        </button>

      )}

    </div>

  );
}

export default BookingCard;