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

exports.callGoogleMaps = (lat, lng) => {
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GOOGLE_MAPS_KEY}`
    )
    .then((response) => {
      console.log(response);
      return response.data.results[0].address_components
        .slice(2, 4)
        .map((addressComponent) => {
          return addressComponent.long_name;
        })
        .join(", ");
    });
};
