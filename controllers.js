const { callOpenWeather } = require("./models.js");

exports.getWeather = (req, res, next) => {
  const { lat, lng } = req.query;
  callOpenWeather(lat, lng)
    .then((weather) => {
      res.status(200).send({ weather: weather });
    })
    .catch(next);
};
