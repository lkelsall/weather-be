const express = require("express");
const cors = require("cors");
const { getWeather, getAddress } = require("./controllers");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/weather", getWeather);
app.get("/api/address", getAddress);

const { PORT = 9090 } = process.env;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
