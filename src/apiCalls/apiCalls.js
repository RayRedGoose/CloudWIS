export const getCurrentWeatherData = (city) => {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},us&APPID=b5c3a8148fd667e39bc1d42dbd91efc3`)
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching current weather data');
      }
      return response.json();
    })
}

export const getWeekWeatherData = (city) => {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=b5c3a8148fd667e39bc1d42dbd91efc3`)
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching week weather data');
      }
      return response.json();
    })
}
