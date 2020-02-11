export const getCurrentWeatherData = (city) => {
  const apiKey = 'b5c3a8148fd667e39bc1d42dbd91efc3';
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},us&APPID=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching current weather data');
      }
      return response.json();
    })
}

export const getWeekWeatherData = (city) => {
  const apiKey ='b5c3a8148fd667e39bc1d42dbd91efc3';
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching week weather data');
      }
      return response.json();
    })
}
