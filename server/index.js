const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());

const router = require("./router/router");

// const PORT = process.env.PORT;
const PORT = 3003;

app.use(express.json());
app.use(router);

app.use(function (req, res) {
  res.type("text/plain");
  res.status(404);
  res.send("404 not found");
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:3003`);
});