import React from "react";

const WeatherCard = ({ className, children, ...props }) => {
  return (
    <div
      className={`weather-card px-4 py-3 rounded shadow bg-white h-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default WeatherCard;
