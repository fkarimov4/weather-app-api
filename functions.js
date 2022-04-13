require("dotenv").config();
const fetch = require('cross-fetch');


exports.getWeather = async (req, res) => {
  const query = req.body.query
  const apiUrl = "https://api.weatherapi.com/v1/current.json";
  const fetch_res = await fetch(
    `${apiUrl}?key=${process.env.WEATHER_API_KEY}&q=${req.body.query}`
  );
  const json = await fetch_res.json();
  res.send(json);
};
