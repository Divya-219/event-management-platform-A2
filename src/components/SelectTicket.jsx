function SelectTicket({ state, dispatch, event }) {

  const selectedTicket =
    event.ticketTypes.find(
      (ticket) => ticket.name === state.ticketType
    ) || event.ticketTypes[0];

  const totalPrice =
    Number(selectedTicket?.price || 0) *
    Number(state.quantity);

  return (
    <div className="booking-card">

      <h2>Select Tickets</h2>

      <h3>{event.title}</h3>

      <p>
        {event.date} | {event.time}
      </p>

      <label>Ticket Type</label>

      <select
        value={selectedTicket?.name || ""}
        onChange={(e) =>
          dispatch({
            type: "SET_TICKET",
            payload: e.target.value,
          })
        }
      >
        {event.ticketTypes.map((ticket) => (
          <option
            key={ticket.name}
            value={ticket.name}
          >
            {ticket.name} - ${ticket.price}
          </option>
        ))}
      </select>

      <label>Quantity</label>

      <input
        type="number"
        min="1"
        value={state.quantity}
        onChange={(e) =>
          dispatch({
            type: "SET_QUANTITY",
            payload: Number(e.target.value),
          })
        }
      />

      <h3 className="total-price">
        Total Price: ${totalPrice}
      </h3>

      <button
        className="primary-btn"
        onClick={() =>
          dispatch({
            type: "NEXT_STEP",
          })
        }
      >
        Continue
      </button>

    </div>
  );
}

export default SelectTicket;