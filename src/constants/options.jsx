export const SelectTravelsList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A solo traveler in exploration",
    icon: "🧍",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adventurers",
    icon: "👨‍👩‍👧‍👦",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers",
    icon: "👯",
    people: "5 to 10 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don’t worry about cost",
    icon: "👑",
  },
];

export const AI_PROMPT =
  "Generate Travel plan for Location: {location} for {totalDays} days for {travelWith} with a {budget} budget , give me Hotels options list with HotelName cordinates,rating, descrition and suggest itineary with placeName,place Details, place Image Url, Geo Coordinates,ticket pricing, time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format";
