import { useDeferredValue, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import EventCard from "./EventCard";

function EventSection({search}){
const [category,setCategory]=useState("All");
const [price,setPrice]=useState("All");
const [date,setDate]=useState("All");
const [sort,setSort]=useState("default");
const deferredSearch =useDeferredValue(search);

const {data:events=[],isLoading,isError}=useQuery({

queryKey:["events"],
queryFn:async()=>{

const res =
await fetch(
"http://localhost:3000/events"
);
return res.json();

},
staleTime:300000
});

if(isLoading)
return <h2>Loading...</h2>

if(isError)
return <h2>Error</h2>

let filteredEvents =
events.filter((event)=>{


const searchMatch =event.title.toLowerCase().includes(
(deferredSearch || "").toLowerCase()
);

const categoryMatch =category==="All"||event.category===category;

const eventPrice =event.ticketTypes?.[0]?.price || 0;

const priceMatch =price==="All"||price==="low"&& eventPrice <100||
price==="high"&& eventPrice >100;

const dateMatch =date==="All"||date==="upcoming"&&
new Date(event.date)>new Date();


return (

searchMatch&&categoryMatch&&priceMatch&&dateMatch

)


});

if(sort==="date"){
filteredEvents.sort((a,b)=>
new Date(a.date)
-
new Date(b.date)

)

}

if(sort==="price"){
filteredEvents.sort(
  (a,b)=>
  (a.ticketTypes?.[0]?.price || 0) -
  (b.ticketTypes?.[0]?.price || 0)

)

}

return(
<section className="events-section">
<h2 className="section-title">

Upcoming Events

</h2>
<div className="filters">
<select

onChange={(e)=>
setCategory(e.target.value)
}>
<option>
All Categories
</option>

<option>
Technology
</option>


<option>
Music
</option>


<option>
Sports
</option>

</select>

<select

onChange={(e)=>
setDate(e.target.value)
}>


<option value="All">
All Dates
</option>


<option value="upcoming">
Upcoming
</option>

</select>
<select

onChange={(e)=>
setPrice(e.target.value)
}>


<option value="All">
All Prices
</option>


<option value="low">
Below $100
</option>


<option value="high">
Above $100
</option>


</select>
<select

onChange={(e)=>
setSort(e.target.value)
}>


<option value="default">
Sort By
</option>


<option value="date">
Date
</option>


<option value="price">
Price
</option>


</select>

</div>

<div className="events-grid">
{

filteredEvents.map(event=>(

<EventCard
key={event.id}

event={event}/>
))

}
</div>
</section>
)
}


export default EventSection;