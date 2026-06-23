import { useDispatch,useSelector} from "react-redux";
import {updateField,addTicket,removeTicket,updateTicket} from "../store/eventSlice";

function EventDetailsForm({next,back}) {
 const dispatch = useDispatch();
 const ticketTypes =useSelector( state => state.event.ticketTypes );
 return (

  <div className="event-details-card">
    <h2 className="event-details-title">
      Event Details
    </h2>

    <input className="event-input"type="date"
      onChange={(e)=>
        dispatch(
          updateField({
            name:"date",
            value:e.target.value
          })
        )
      }
    />

    <input className="event-input"type="time"
      onChange={(e)=>
        dispatch(
          updateField({
            name:"time",
            value:e.target.value
          })
        )
      }
    />

    <input className="event-input"placeholder="Location"
      onChange={(e)=>
        dispatch(
          updateField({
            name:"location",
            value:e.target.value
          })
        )
      }
    />

    <h3 className="ticket-heading">
      Ticket Types
    </h3>

    <button
      className="add-ticket-btn"
      onClick={() =>
        dispatch(addTicket())
      }
    >
      Add Ticket
    </button>

    {ticketTypes.map((ticket, index) => (
    <div key={index}className="ticket-item">

        <input className="ticket-input"placeholder="Ticket Name"
          onChange={(e)=>
            dispatch(
              updateTicket({
                index,
                field:"name",
                value:e.target.value
              })
            )
          }
        />

        <input className="ticket-input"placeholder="Price"
          onChange={(e)=>
            dispatch(
              updateTicket({
                index,
                field:"price",
                 value: Number(e.target.value)
              })
            )
          }
        />

        <input className="ticket-input"placeholder="Available"
          onChange={(e)=>
            dispatch(
              updateTicket({
                index,
                field:"available",
                value:e.target.value
              })
            )
          }
        />

        <button className="remove-ticket-btn"
          onClick={() =>
            dispatch(
              removeTicket(index)
            )
          }
        >
          Remove
        </button>

      </div>

    ))}

    <div className="event-form-buttons">

      <button
        className="event-back-btn"
        onClick={back}
      >
        Back
      </button>

      <button
        className="event-next-btn"
        onClick={next}
      >
        Next
      </button>

    </div>

  </div>



  );

}

export default EventDetailsForm;