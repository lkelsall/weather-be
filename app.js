const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("request received!");
});

const { PORT = 9090 } = process.env;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
