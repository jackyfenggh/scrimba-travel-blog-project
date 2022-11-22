import React from "react"
import mapIcon from "../images/mapicon.png"

export default function Destination(props) {
  const {country, site, imageUrl, datesTravelled, googleMapsUrl} = props.destination

  return (
    <section className="destinationCard">
      <img className="destinationCard--img" src={imageUrl} alt={site.name}/>
      <div className="destinationCard--info">
        <div className="destinationCard--header">
          <img src={mapIcon} alt="location symbol" />
          <h6 className="destinationCard--header--country">{country.toUpperCase()}</h6>
          <a className="destinationCard--header--googleMaps" href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="destinationCard--siteName">{site.name}</h2>
        <p className="destinationCard--datesTravelled">{datesTravelled}</p>
        <p className="destinationCard--siteDescription">{site.description}</p>
      </div>
    </section>
  )
}