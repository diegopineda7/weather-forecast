const appId = 'd9808b61d1fc7e7235bb8e197bc5a6ac'

export const getCurrentWeather = city => {
  var result = ''
  const Http = new XMLHttpRequest()
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appId}`
  Http.open('GET', url)
  Http.send()

  Http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      result = JSON.parse(Http.responseText)
    }
  }
  return result
}

export const getWeatherForecast = city => {
  var result = ''
  const Http = new XMLHttpRequest()
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appId}`
  Http.open('GET', url)
  Http.send()

  Http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      result = JSON.parse(Http.responseText)
    }
  }
  return result
}

// export const getIcon = iconName => {
//   const iconUrl = `http://openweathermap.org/img/w/${icon}.png`
// }