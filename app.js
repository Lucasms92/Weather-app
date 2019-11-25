// Init weather object
const weather = new Weather("Sao Paulo", "BR");
//Init UI
const ui = new UI();
//Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.error(err));
}
