const express = require("express");
const app = express();
const port = 3000;
const Thermostat = require("./thermostat");

const thermo = new Thermostat();

app.get("/temperature", (req, res) => {
  const temp = thermo.getTemp();
  const tempObj = {
    temperature: temp,
  };
  res.send(JSON.stringify(tempObj));
});

app.post("/up", (req, res) => {
  thermo.up(1);
  res.send();
});

app.post("/down", (req, res) => {
  thermo.down(1);
  res.send();
});

app.delete("/temperature", (req, res) => {
  thermo.reset();
  res.send();
});

// app.post("/up", )

console.log(`Server listening on localhost:${port}`);
app.listen(port);
