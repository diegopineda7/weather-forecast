const appId = 'd9808b61d1fc7e7235bb8e197bc5a6ac'

export const getWeatherForecast = (city, next) => {
  var result = ''
  const Http = new XMLHttpRequest()
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${appId}`
  Http.open('GET', url)
  Http.send()

  Http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      result = JSON.parse(Http.responseText)
      next(result)
    }
  }
  return result
}

export const getCurrentWeather = (city, next) => {
  const Http = new XMLHttpRequest()
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appId}`
  Http.open('GET', url)
  Http.send()

  Http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const result = JSON.parse(Http.responseText)
      console.log('RES', result)
      next(result)
    }
  }
}

export const iconUrl = iconName => {
  return `http://openweathermap.org/img/w/${iconName}.png`
}