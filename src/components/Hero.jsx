function Hero({setSearch}) {
return (

<section className="hero-container">
<div className="hero-left">


<h1>
Discover Amazing
<br/>
Events
</h1>


<div className="search-box">
<input

type="text"placeholder="Search events by title..."
onChange={(e)=>
setSearch(e.target.value)
}

/>

<button>
Search
</button>

</div>
</div>
<div className="hero-right">
<img src="/images/image2.jpg"alt="event"/>

</div>
</section>


)


}


export default Hero;