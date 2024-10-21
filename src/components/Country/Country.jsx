import { useState } from "react";
import "./Country.css"
export default function Country({country, handleVisitedCountry, handleVisitedFlags}) {
    console.log(country);
    const {name, flags, area, population, cca3} = country;

    const [visited , setVisited] = useState(false);

    const handleVisited = () => {
      setVisited(!visited);
    }
    
  return (
    <div className={`country ${visited && "visited"}`}>
      <h2 style={{color: visited ? "purple": "white"}}>{name.common}</h2>
      <img src={flags.png} alt="" />
      <p>Population: {population} </p>
      <p>Area: {area} square kilometer </p>
      <p><small>Code: {cca3} </small></p>

      <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
      <br />
      <button onClick={handleVisitedFlags}>Add Flag</button>
      <br />
      <button style={{margin: "10px"}} onClick={handleVisited}>{visited ? "Visited" : "Want to Go"}</button>
      <br />
      {visited && "I have visited this country."}
    </div>
  )
}
