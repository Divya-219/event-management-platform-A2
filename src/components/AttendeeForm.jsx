import {Form,useActionData,useNavigation} from "react-router-dom";
import { useEffect } from "react";

function AttendeeForm({state,dispatch}) {

  const actionData =useActionData();

  const navigation = useNavigation();

  const isSubmitting =navigation.state ==="submitting";
    useEffect(() => {

  if (actionData?.success) {

    dispatch({
      type: "NEXT_STEP"
    });

  }

}, [actionData, dispatch]);
  return (

    <div className="booking-card">

      <h2>
        Attendee Information
      </h2>

      {actionData?.errors &&
        actionData.errors.length > 0 && (

        <div className="errors">

          <strong>
            Please fix:
          </strong>

          <ul>

            {actionData.errors.map(
              (error, index) => (

                <li key={index}>
                  {error}
                </li>

              )
            )}

          </ul>

        </div>

      )}

       <Form
        method="post"
        onSubmit={(e) => {
          const formData = new FormData(e.currentTarget);

          dispatch({
            type: "SET_ATTENDEE",
            payload: {
              name: formData.get("name"),
              email: formData.get("email"),
              phone: formData.get("phone"),
            },
          });
        }}
      >

        <label>Name</label>

        <input  name="name" type="text" placeholder="Enter your name"/>

        <label>Email</label>

        <input name="email" type="email" placeholder="Enter email"/>

        <label>Phone</label>

        <input name="phone"  type="text" placeholder="Enter phone"/>

        <div className="booking-buttons">

          <button
            type="button"
            className="secondary-btn"
            onClick={() =>
              dispatch({
                type:
                  "PREV_STEP"
              })
            }
          >
            Back
          </button>

          <button
            type="submit"
            className="primary-btn"
            disabled={
              isSubmitting
            }
          >

            {isSubmitting
              ? "Validating..."
              : "Continue"}

          </button>

        </div>

      </Form>

    </div>

  );

}

export default AttendeeForm;