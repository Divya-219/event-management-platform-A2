import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {useAddEventMutation} from "../store/eventApi";

function PreviewPublish({ back }) {
 const navigate = useNavigate();
  const event = useSelector(
    (state) => state.event
  );
 const [addEvent,
    { isLoading }
  ] = useAddEventMutation();
   

async function handlePublish() {

    
    if (!event.title || !event.date ||!event.location ||event.ticketTypes.length === 0) {
      alert("Please complete all fields");
      return;
    }
    try {

      await addEvent(event).unwrap();
         localStorage.removeItem(
        "eventDraft"
      );

      alert("Event Published!");
      navigate("/events");
    } catch (error) {
    alert("Publish Failed");

    }
  }

 return (

  <div className="preview-page">
    <div className="preview-card">
      <h2 className="preview-title">
        Preview Event
      </h2>
      <div className="preview-details">
        <p>
          <strong>Title:</strong>
          {event.title}
        </p>

        <p>
          <strong>Category:</strong>
          {event.category}
        </p>

        <p>
          <strong>Date:</strong>
          {event.date}
        </p>

        <p>
          <strong>Time:</strong>
          {event.time}
        </p>

        <p>
          <strong>Location:</strong>
          {event.location}
        </p>

      </div>

      <div className="preview-buttons">

        <button
          className="preview-back-btn"
          onClick={back}
        >
          Back
        </button>

        <button
          className="preview-publish-btn"
          onClick={handlePublish}
          disabled={isLoading}>
          {isLoading
            ? "Publishing..."
            : "Publish Event"}
        </button>

      </div>

    </div>

  </div>


  );

}

export default PreviewPublish;