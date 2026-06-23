import { Link } from "react-router-dom";
import {useMutation,useQueryClient,} from "@tanstack/react-query";

function EventCard({ event }) {
const queryClient = useQueryClient();
const likeMutation = useMutation({
 mutationFn: async () => {
  await fetch(
        `http://localhost:3000/events/${event.id}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            liked: !event.liked,
          }),
        }
      );

    },

    onMutate: () => { const previousEvents = queryClient.getQueryData(["events"]);
      queryClient.setQueryData(
        ["events"],
        (oldEvents) =>oldEvents.map((item) =>
            item.id === event.id
              ? {
                  ...item,
                  liked: !item.liked,
                }
              : item
          )
      );
 return { previousEvents };
},
onError: (error,variables,context) => {
 queryClient.setQueryData(["events"],
 context.previousEvents);

    },

  });

  return (

    <div className="event-card">

      <button
        className="heart-btn"
        onClick={() =>
          likeMutation.mutate()
        }
      >
        {event.liked ? "❤️" : "♡"}
      </button>

      <img
        src={event.image}
        alt={event.title}
        className="event-image"
      />

      <div className="event-content">

        <h3>{event.title}</h3>

        <p className="event-category">
          {event.category}
        </p>

        <p className="event-date">
          {event.date}
        </p>

        <p className="event-time">
          {event.time}
        </p>

        <p className="event-location">
          {event.location}
        </p>

        <h4 className="event-price">
          ${event.ticketTypes?.[0]?.price}
        </h4>

        <Link
          to={`/events/${event.id}`}
        >
          <button className="details-btn">
            View Details
          </button>
        </Link>

      </div>

    </div>

  );
}

export default EventCard;