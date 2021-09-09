const express = require("express");
const cors = require("cors");
const { getWeather } = require("./controllers");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/weather", getWeather);

const { PORT = 9090 } = process.env;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
