import WeatherCard from "@components/ui/WeatherCard";
import React from "react";
import rootStore from "../../stores/rootStore";
import WeatherHighlight from "./WeatherHighlight";
import formatDate from "../../utils/formatDate";
import getImage from "../../utils/getImage";

const WeatherForecasts = () => {
  const weatherKeys = [
    { key: "tempInfo", title: "Temperature Info" },
    { key: "windSpeed", title: "Wind Status" },
    { key: "sunInfo", title: "Sunrise & Sunset" },
    { key: "humidity", title: "Humidity" },
    { key: "visibility", title: "Visibility" },
    { key: "airPollution", title: "Air Quality" },
  ];

  const {
    weather: { current, forecast },
  } = rootStore;

  return (
    <div className="container">
      <div className="row">
        <h5>Weather Forecasts</h5>
        <div className="row row-gap-4">
          {forecast.map((weather, index) => (
            <div className="col-6 col-lg-4 col-xxl-2" key={index}>
              <WeatherCard
                className={
                  "text-center d-flex flex-column justify-content-between align-items-center h-auto"
                }
                title={weather.main}
              >
                <p className="fw-semibold">
                  {formatDate(weather.day).shortDay}
                </p>

                <img src={getImage[weather.main]} alt="" width={60} />
                <p className="mt-2">
                  {weather.temperature} <sup>°C</sup>
                </p>
              </WeatherCard>
            </div>
          ))}
        </div>
      </div>
      <div className="row mt-5">
        <h5>Today's Highlights</h5>

        <div className="row row-gap-4 mt-2">
          {weatherKeys.map((info) => (
            <div className="col-12  col-lg-6 col-xl-4" key={info.key}>
              <WeatherCard>
                <WeatherHighlight current={current} info={info} />
              </WeatherCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecasts;
