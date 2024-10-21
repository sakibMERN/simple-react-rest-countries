import "./Country.css"
export default function Country({country}) {
    console.log(country);
    const {name, flags, area, population} = country;
  return (
    <div className="country">
      <h2>{name.common}</h2>
      <img src={flags.png} alt="" />
      <p>Population: {population} </p>
      <p>Area: {area} square kilometer </p>
    </div>
  )
}
