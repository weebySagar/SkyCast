import React from "react";
import rootStore from "../../stores/rootStore";
import formatDate from "../../utils/formatDate";
import getImage from "../../utils/getImage";

const WeatherDetails = ({}) => {
  const {
    weather: { current },
  } = rootStore;

  return (
    <>
      <div className="weather-icon text-center">
        <img src={getImage[current.main.main]} alt="" className="img-fluid" />
      </div>
      <div className="weather-detail-wrapper mt-4 flex-grow-1">
        <div className="weather-temperature d-flex flex-column gap-2 py-3">
          <p className="temperature">{current.temperature}</p>
          <div className="d-flex gap-2 align-items-end">
            <p className="time fw-semibold">{formatDate(current.date).day},</p>
            <p>{formatDate(current.date).dateString}</p>
          </div>
        </div>

        <hr />

        <div className="weather-other-details py-3">
          <p className="description text-capitalize fs-3">
            {current.weatherDescription}
          </p>
          <p className="city">{current.name}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
