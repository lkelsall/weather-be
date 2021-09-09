const { callOpenWeather, callGoogleMaps } = require("./models.js");

exports.getWeather = (req, res, next) => {
  const { lat, lng } = req.query;
  callOpenWeather(lat, lng)
    .then((weather) => {
      res.status(200).send({ weather: weather });
    })
    .catch(next);
};

exports.getAddress = (req, res, next) => {
  const { lat, lng } = req.query;
  callGoogleMaps(lat, lng)
    .then((address) => {
      res.status(200).send({ address: address });
    })
    .catch(next);
};
