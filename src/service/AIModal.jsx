import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,

  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a travel plan for location Las Vegas for 3 days for a couple with a cheap budget. Provide a list of hotel options including hotel name, hotel address, price, hotel image URL, geo coordinates, rating, and description. Also suggest a detailed 3-day itinerary including place name, place details, place image URL, geo coordinates, ticket pricing, rating, best time to visit, and travel time between each location. Return the complete response strictly in valid JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotels": [\n    {\n      "hotelName": "The D Las Vegas",\n      "hotelAddress": "301 Fremont St, Las Vegas, NV 89101",\n      "price": "$45 per night",\n      "hotelImageUrl": "https://example.com/hotel.jpg",\n      "geoCoordinates": {\n        "lat": 36.1707,\n        "lng": -115.1439\n      },\n      "rating": 4.0,\n      "description": "Affordable hotel located on Fremont Street."\n    }\n  ],\n  "itinerary": {\n    "day1": [],\n    "day2": [],\n    "day3": []\n  }\n}\n```',
        },
      ],
    },
  ],
});
