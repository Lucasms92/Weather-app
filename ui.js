class UI {
  constructor() {
    this.location = document.querySelector("#w-location");
    this.desc = document.querySelector("#w-desc");
    this.string = document.querySelector("#w-string");
    this.details = document.querySelector("#w-details");
    this.icon = document.querySelector("#w-icon");
    this.humidity = document.querySelector("#w-humidity");
    this.cloudiness = document.querySelector("#w-cloudiness");
    this.pressure = document.querySelector("#w-pressure");
    this.wind = document.querySelector("#w-wind");
  }

  paint(weather) {
    this.location.textContent = `${weather.city.name}, ${weather.city.country}`;
    this.desc.textContent = weather.list[0].weather[0].description;
    this.string.textContent = `${(weather.list[0].main.temp - 273, 15).toFixed(
      0
    )} ºC`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}.png`
    );
    this.humidity.textContent = `Relative humidity: ${weather.list[0].main.humidity}%`;
    this.cloudiness.textContent = `Cloudiness: ${weather.list[0].clouds.all}%`;
    this.pressure.textContent = `Pressure: ${weather.list[0].main.pressure} hPa`;
    this.wind.textContent = `Wind: ${weather.list[0].wind.speed}m/s from ${weather.list[0].wind.deg}º`;
  }
}
