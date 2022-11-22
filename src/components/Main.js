import React from "react"
import Destination from "./Destination"

export default function Main(props) {
  const destinations = props.destinationData.map(destination => {
    return (
      <Destination 
        key={destination.id}
        destination={destination}
      />
    )
  })

  return (
    <main>
      {destinations}
    </main>
  )
}