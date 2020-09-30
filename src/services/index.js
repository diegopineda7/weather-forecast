const appId = process.env.REACT_APP_API_ID

export const getWeatherForecast = (lat, lon, next) => {
  const Http = new XMLHttpRequest()
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${appId}`
  Http.open('GET', url)
  Http.send()

  Http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const result = JSON.parse(Http.responseText)
      next(result)
    }
  }
}

export const getCurrentWeather = (city, next) => {
  const Http = new XMLHttpRequest()
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appId}`
  Http.open('GET', url)
  Http.send()

  Http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const result = JSON.parse(Http.responseText)
      next(result)
    }
  }
}

export const iconUrl = iconName => {
  return `https://openweathermap.org/img/w/${iconName}.png`
}