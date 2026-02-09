import React, { useState } from 'react';

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import {
  SelectBudgetOptions,
  SelectTravelsList,
} from '@/constants/options';

function CreateTrip() {
  const [place, setPlace] = useState();

  return (
    <div className="- sm:px-10 md:px-32 lg:px-56  px-5 xl:px-72 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              value: place,
              onChange: (v) => {
                setPlace(v);
                console.log(v);
              },
            }}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planing your trip?
          </h2>
          <input
            placeholder="Ex. 3"
            type="number"
            className="w-full rounded-lg border p-4 text-xl placeholder:text-xl"
          />
        </div>
      </div>

      <div>
        <h2 className="font-bold text-3xl">What is your Budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              className="p-4 border cussor pointer rounded-lg hover:shadow"
            >
              <h2 className="text-4xl ">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold text-3xl">What is your Budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTravelsList.map((item, index) => (
            <div
              key={index}
              className="p-4 border cussor pointer rounded-lg hover:shadow"
            >
              <h2 className="text-4xl ">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
