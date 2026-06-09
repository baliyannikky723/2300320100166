const express = require("express");
const Log = require("./log");

const app = express();

app.get("/", async (req, res) => {
  await Log(
    "backend",
    "info",
    "route",
    "Home page visited"
  );

  res.send("Server is running");
});

app.get("/about", async (req, res) => {
  await Log(
    "backend",
    "info",
    "route",
    "About page visited"
  );

  res.send("About Page");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});