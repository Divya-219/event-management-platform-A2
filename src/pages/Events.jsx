import {useState} from "react";
import Hero from "../components/Hero";
import EventSection from "../components/EventSection";


function Events(){

const [search,setSearch]=useState("");

return(
<>
<Hero setSearch={setSearch}/>
<EventSection search={search}/>

</>
)
}


export default Events;