import { useReducer } from "react";
import { useLoaderData } from "react-router-dom";

import SelectTicket from "../components/SelectTicket";
import AttendeeForm from "../components/AttendeeForm";
import Confirmation from "../components/Confirmation";

import { bookingReducer, initialState,} from "../reducers/bookingReducer";
function Booking() {
const event = useLoaderData();
const [state, dispatch] = useReducer( bookingReducer, initialState);

  return (
    <div className="booking-page">
      <div className="booking-wrapper">
        <h1 className="booking-heading">
          Ticket Booking
        </h1>

        <div className="progress-wrapper">

          <p className="step-text">
            Step {state.step} of 3
          </p>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${(state.step / 3) * 100}%`,
              }}
            ></div>
          </div>

        </div>

        {state.step === 1 && (
          <SelectTicket
            state={state}
            dispatch={dispatch}
            event={event}
          />
        )}

        {state.step === 2 && (
          <AttendeeForm
            state={state}
            dispatch={dispatch}
          />
        )}

        {state.step === 3 && (
          <Confirmation
            state={state}
            event={event}
            dispatch={dispatch}
          />
        )}

      </div>
    </div>
  );
}

export default Booking;