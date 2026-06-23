import { useLoaderData, useNavigate } from "react-router-dom";

function EventDetails() {
const event = useLoaderData();
const navigate = useNavigate();
console.log(event);
  return (
    <div className="event-details-container">
 <img src={event.image}alt={event.title}className="event-banner"/>
<div className="event-info">
  <p className="category">{event.category}</p>
  <h1 className="event-title">
    {event.title}
  </h1>

  <p>Location: {event.location}</p>

  <p>
    Date: {event.date} | Time: {event.time}
  </p>

  <p>
    Organizer: {event.organizer}
  </p>

  <p>
    Venue: {event.venue}
  </p>

  <h2 className="price">
    ${event.price}
  </h2>

  <p className="description">
    {event.description}
  </p>
</div>

      <div className="ticket-section">

        <h2>Ticket Types</h2>

        {event.ticketTypes.map((ticket) => (
          <div
            key={ticket.name}
            className="ticket-card"
          >
            <h4>{ticket.name}</h4>

            <p>${ticket.price}</p>

            <p>
              Available: {ticket.available}
            </p>
          </div>
        ))}

      </div>

      <button
        className="book-btn"
        onClick={() =>
          navigate(`/booking/${event.id}`)
        }
      >
        Book Tickets
      </button>

    </div>
  );
}

export default EventDetails;