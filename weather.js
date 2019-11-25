class Weather {
  constructor(city, countryCode) {
    this.apiKey = "7601423fb2b5f90bb89e30266f00a63d";
    this.city = city.replace(/ /g, "+");
    this.countryCode = countryCode;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.city},${this.countryCode}&APPID=${this.apiKey}`
    );
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }

  //Change weather location
  changeLocation(city, countryCode) {
    this.city = city.replace(/ /g, "+");
    this.countryCode = countryCode;
  }
}
