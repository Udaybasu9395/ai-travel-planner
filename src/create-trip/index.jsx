import { useEffect, useState } from "react";

import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelsList,
} from "@/constants/options";

function CreateTrip() {
  const [place, setPlace] = useState();

  const [fromData, setFromData] = useState({});

  const handleInputChange = (name, value) => {
    setFromData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(fromData);
  }, [fromData]);

  const OnGenrateItineary = () => {
    if (
      fromData?.noOfDays > 5 ||
      !fromData?.location ||
      !fromData?.budget ||
      !fromData?.travelWith
    ) {
      toast.error("Please fill all the details correctly.");
      return;
    }

    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      fromData?.location?.label,
    )
      .replace("{totalDays}", fromData?.noOfDays)
      .replace("{travelWith}", fromData?.travelWith)
      .replace("{budget}", fromData?.budget);

    comsole.log(FINAL_PROMPT);
  };

  return (
    <div className="- sm:px-10 md:px-32 lg:px-56  px-5 xl:px-72 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences 🏕️ 🌴
      </h2>
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
                handleInputChange("location", v);
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
            className="w-full rounded-lg border p-4 text-base placeholder:text-base"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl my-3 font-medium">What is your Budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow ${
                fromData?.budget === item.title
                  ? "shadow-lg border-black ring-2 ring-black"
                  : ""
              }`}
            >
              <h2 className="text-4xl ">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl my-3 font-medium">
          Who do you plan on travelling with on your next adventure?
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTravelsList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("travelWith", item.people)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow ${
                fromData?.travelWith === item.people
                  ? "shadow-lg border-black ring-2 ring-black"
                  : ""
              }`}
            >
              <h2 className="text-4xl ">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 justify-end flex">
        <Button onClick={OnGenrateItineary}>Generate Itinerary</Button>
      </div>
    </div>
  );
}

export default CreateTrip;
