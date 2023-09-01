interface Travel {
    id: number
    destination: TravelDestination[]
    creatorId: number
    month: number
    week: number
    day: number
}


interface TravelDestination {
  id: number
  travel : Travel
  travelId: number
  destination: Destination
  destinationId: number
}