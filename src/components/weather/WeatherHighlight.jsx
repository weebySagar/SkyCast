import React from "react";

import "@styles/weather/_weather-highlight.scss";
import SunriseImg from "@components/ui/SunriseImg";
import SunsetImg from "@components/ui/SunsetImg";
import formatDate from "../../utils/formatDate";

const WeatherHighlight = ({ info, current }) => {
  const airData = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
  return (
    <div className="weather-highlight">
      <p className="title mb-3">{info.title}</p>
      {info.key === "sunInfo" && (
        <>
          <p className=" sun info ">
            <SunriseImg />{" "}
            {formatDate(current[info.key].sunrise.toString()).dateSun}
          </p>
          <p className="sun info ">
            <SunsetImg />
            {formatDate(current[info.key].sunset.toString()).dateSun}
          </p>
        </>
      )}
      {info.key === "tempInfo" && (
        <>
          <p className="info">
            {current[info.key].minTemp} <sup>°C</sup> <span>min temp</span>
          </p>
          <p className="info">
            {current[info.key].maxTemp}
            <sup>°C</sup> <span>max temp</span>
          </p>
        </>
      )}
      {info.key !== "sunInfo" && info.key !== "tempInfo" && (
        <>
          <p className="info">
            {current[info.key]}
            {info.key === "windSpeed" && <sub>meter/sec</sub>}
            {info.key === "visibility" && <sub>km</sub>}

            {info.key === "humidity" && <sup>%</sup>}
          </p>

          {info.key === "airPollution" && (
            <p className="mt-2">{airData[current[info.key] - 1]}</p>
          )}
        </>
      )}
    </div>
  );
};

export default WeatherHighlight;
