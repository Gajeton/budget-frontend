interface Destination {
    id: number
    createdAt: Date
    updatedAt: Date
    creatorId: number
    title: string
    travelDestination: TravelDestination[]
}