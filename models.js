const axios = require("axios");

require("dotenv").config();

exports.callOpenWeather = (lat, lng) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lng}&appid=${process.env.OPENWEATHER_KEY}`
    )
    .then((response) => {
      return response.data.list;
    });
};
