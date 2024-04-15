
# Sky Cast

This is the Assignment project for Weather App. 

Sky Cast is a web application built using React.js. It leverages the OpenWeather API to fetch weather data for various cities. The app provides users with current weather information as well as a 5-day weather forecast. Additionally, it supports infinite scrolling, allowing users to browse weather data for multiple cities seamlessly.


    
    


## Features

- **Current weather display:** Users can view the current weather conditions for a selected city, including temperature, humidity, wind speed, and weather description.
- **5-day weather forecast:** The app presents a 5-day weather forecast for the selected city, allowing users to plan ahead.
- **Infinite scrolling:** Users can scroll through a list of cities to view weather data continuously without pagination.
- **Responsive design:** The app is designed to be responsive, ensuring optimal viewing experience across various devices and screen sizes.


## Tech Stack

- **React.js:** A JavaScript library for building user interfaces.
- **MobX State Tree:**  A state management library for React applications that helps in managing complex application state.
- **React Query:** A library for managing and caching asynchronous data fetching in React applications.
- **OpenWeather API:** An API that provides weather data for various locations worldwide.
## Deployment

The weather website is deployed on https://sky-cast-in.vercel.app/.  Please visit the link to explore the live version of the website.


## Environment Variables


To run this project, you will need to create a .env file in the root of this project

`VITE_WEATHER_API_KEY` : API Key which is given by open weather to access the data while api fetching.


## Run Locally


1) Go to the project directory

```bash
  cd weather-project
```

2) Install dependencies

```bash
  npm install

```

3) Start the server

```bash
  npm run dev
```


5) Open your browser and visit http://localhost:5173 to view the weather app locally.

