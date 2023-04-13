import React, { useState } from "react";

import weatherData from "./weather.json";

const Weather = () => {
  const [city, setCity] = useState<string>("");

  const getData = () => {};

  return (
    <div>
      <label htmlFor="city">City:</label>
      <input
        type={"text"}
        id="city"
        onChange={(event) => setCity(event.target.value)}
      ></input>
    </div>
  );
};

export default Weather;
