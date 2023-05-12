import React, { useState } from "react";

import weather from "./weather";

const Weather = () => {
  const [city, setCity] = useState<string>("");

  const getData = (str: string) => {
    let newList: any[] = [];
    console.log(newList);
    // weather.filter((i) => i.name.includes);
    console.log(weather.filter((i) => i.name.includes(str)));
    // setCity(newList);
  };
  console.log(city);

  return (
    <div>
      {city}
      <label htmlFor="city">City:</label>
      <input
        type={"text"}
        id="city"
        onChange={(event) => getData(event.target.value)}
      ></input>
    </div>
  );
};

export default Weather;
