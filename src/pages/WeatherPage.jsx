import { useQueries } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import fetchWeather from "../services/fetchWeather";
import WeatherDetails from "@components/weather/WeatherDetails";
import Spinner from "@components/ui/Spinner";
import "@styles/weather/_weather-details.scss";
import WeatherForecasts from "@components/weather/WeatherForecasts";
import rootStore from "../stores/rootStore";
import fetchAir from "../services/fetchAir";
import fetchForecast from "../services/fetchForecast";

const WeatherPage = () => {
  const [search] = useSearchParams();
  const { updatedWeatherData } = rootStore;

  const weatherData = useQueries({
    queries: [
      {
        queryKey: [`lat:${search.get("lat")},long:${search.get("lon")}`],
        queryFn: () => fetchWeather(search.get("lat"), search.get("lon")),
      },
      {
        queryKey: ["airData"],
        queryFn: () => fetchAir(search.get("lat"), search.get("lon")),
      },
      {
        queryKey: ["forecast"],
        queryFn: () => fetchForecast(search.get("lat"), search.get("lon")),
      },
    ],
  });

  const isLoading = weatherData.some((data) => data.isLoading);
  const isError = weatherData.some((data) => data.isError);
  if (isLoading) {
    return (
      <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
        <Spinner />;
      </div>
    );
  }

  if (isError) {
    return (
      <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
        <h1>Something Went wrong, please try again later</h1>
      </div>
    );
  }

  if (weatherData) {
    updatedWeatherData(weatherData);
  }

  return (
    <div className="container-fluid px-0">
      <div className="row mx-0">
        <div className="col-12 col-md-5 col-lg-4 col-xl-3 px-0">
          <div className="weather-details bg-white d-flex flex-column justify-content-between p-5">
            <WeatherDetails />
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-8 col-xl-9">
          <div className="weather-forecasts py-5 p-lg-5">
            <WeatherForecasts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
