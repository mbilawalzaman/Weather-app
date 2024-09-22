const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=06a17de04cb2172d89b8c9e30180a004&query=31.5204,74.3587";

// request({ url: url, json: true }, (error, response) => {
//   // const data = JSON.parse(response.body);
//   console.log("Temprature: ", response.body.current);
// });

// request({ url: url, json: true }, (error, response) => {
//   // const data = JSON.parse(response.body);
//   const weatherData = response.body.current;
//   console.log(
//     "It is Currenty",
//     weatherData.temperature +
//       " degrees out. It feels like " +
//       weatherData.feelslike +
//       " degrees out.",
//   );
// });

request({ url: url, json: true }, (error, response) => {
  // const data = JSON.parse(response.body);
  const weatherData = response.body.current;
  // console.log(weatherData);
  console.log(
    weatherData.weather_descriptions[0] + ". " + "It is Currenty",
    weatherData.temperature +
      " degrees out. It feels like " +
      weatherData.feelslike +
      " degrees out.",
  );
});
