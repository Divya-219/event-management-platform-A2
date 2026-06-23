import { useOptimistic } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";


function Confirmation({ state, event }) {
const navigate = useNavigate();
const [message, addMessage] =useOptimistic("",(current,value)=>value);
const bookingMutation = useMutation({
mutationFn: async(booking)=>{

const res = await fetch(
"http://localhost:3000/bookings",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(booking)

}

);

if(!res.ok){

throw new Error("Booking Failed");

}

return res.json();

}
});

function handleConfirm() {

  const ticket =
    event.ticketTypes.find(
      (t) => t.name === state.ticketType
    ) || event.ticketTypes[0];

  if (!ticket) {
    alert("No ticket found");
    return;
  }

  const booking = {
    userId: "user1",

    eventId: event.id,

    eventTitle: event.title,

    eventDate: event.date,

    tickets: [
      {
        type: ticket.name,
        quantity: Number(state.quantity),
        price: Number(ticket.price),
      },
    ],

    attendees: [
      {
        name: state.attendee.name,
        email: state.attendee.email,
        phone: state.attendee.phone,
      },
    ],

    totalAmount:
      Number(ticket.price) *
      Number(state.quantity),

    status: "confirmed",

    bookingDate:
      new Date().toISOString(),

    referenceNumber:
      "BK-" + Date.now(),
  };

  addMessage("Processing booking...");

  bookingMutation.mutate(booking, {
    onSuccess: () => {
      addMessage(
        "Booking Confirmed Successfully!"
      );
    },

    onError: () => {
      addMessage("Booking Failed");
    },
  });
}
if(bookingMutation.isSuccess){
const booking =bookingMutation.data;

return(

<div className="booking-card">
<h2>
Booking Confirmed 
</h2>
<div className="booking-details">
<p>
<b>Reference:</b>{" "}
{booking.referenceNumber}
</p>

<p>
<b>Event:</b>{" "}
{booking.eventTitle}
</p>

<p>
<b>Date:</b>{" "}
{booking.eventDate}
</p>

<p>
<b>Ticket:</b>{" "}
{booking.tickets[0].type}
</p>

<p>
<b>Quantity:</b>{" "}
{booking.tickets[0].quantity}
</p>



<p>
<b>Name:</b>{" "}
{booking.attendees[0].name}
</p>



<p>
<b>Email:</b>{" "}
{booking.attendees[0].email}
</p>



<p>
<b>Phone:</b>{" "}
{booking.attendees[0].phone}
</p>



</div>



<button

className="view-booking-btn"

onClick={()=>navigate("/my-bookings")}>

View My Bookings

</button>

</div>


)

}

return(


<div className="booking-card">


<h2>
Booking Summary
</h2>



<p>
<b>Event:</b> {event.title}
</p>


<p>
<b>Date:</b> {event.date}
</p>


<p>
<b>Ticket:</b> {state.ticketType}
</p>


<p>
<b>Quantity:</b> {state.quantity}
</p>



<p>
<b>Name:</b> {state.attendee.name}
</p>



<p>
<b>Email:</b> {state.attendee.email}
</p>



<button

className="confirm-btn"

onClick={handleConfirm}disabled={bookingMutation.isPending}>

{

bookingMutation.isPending?"Processing Booking...":"Confirm Booking"

}
</button>
{
message &&

<p className="optimistic-message">

{message}

</p>

}

</div>

)

}


export default Confirmation;