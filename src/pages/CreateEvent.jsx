import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BasicInfo from "../components/BasicInfo";
import EventDetailsForm from "../components/EventDetailsForm";
import PreviewPublish from "../components/PreviewPublish";

function CreateEvent() {

  const [step, setStep] = useState(1);
    const event = useSelector((state) => state.event);
useEffect(() => {
  localStorage.setItem( "eventDraft", JSON.stringify(event));

}, [event]);

  return (

    <div className="create-page">

      <h1>Create Event</h1>

      <p>
        Step {step} of 3
      </p>

      {step === 1 && (
        <BasicInfo
          next={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <EventDetailsForm
          next={() => setStep(3)}
          back={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <PreviewPublish
          back={() => setStep(2)}
        />
      )}

    </div>

  );
}

export default CreateEvent;