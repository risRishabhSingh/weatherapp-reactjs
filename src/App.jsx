import React, { useState } from 'react'
import logo from './Assests/Flow.gif'
import rain from './Assests/Rain.gif'
import cloud from './Assests/Cloudy.gif'
import sunny from './Assests/Sunny.gif'
import SandC from './Assests/Sunny&cloudy.gif'
import thunderstorm from './Assests/Thunderstorm.gif'
import fog from './Assests/Fog.gif'
import mist from './Assests/Mist.gif'
import snow from './Assests/Snow.gif'
import tornado from './Assests/Tornado.gif'
import Input from './Input'
import Search_button from './Search_button'
import './App.css'


const App = () => {

  const [Name_city, setName_city] = useState("")
  let [weather_icon, setweather_icon] = useState("")
  const [max_temp, setmax_temp] = useState("")
  const [min_temp, setmin_temp] = useState("")
  const [Humidity, setHumidity] = useState("")
  const [windspeed, setwindspeed] = useState("")
  const [heading, setheading] = useState("")

  if (weather_icon === "Rain" || weather_icon === "Drizzle") {
    weather_icon = rain
  }
  else if (weather_icon === "Clouds" || weather_icon === "Smoke") {
    weather_icon = cloud
  }
  else if (weather_icon === "Sand" || weather_icon === "Tornado") {
    weather_icon = tornado
  }
  else if (weather_icon === "Dust" || weather_icon === "Mist") {
    weather_icon = mist
  }
  else if (weather_icon === "Haze") {
    weather_icon = SandC
  }
  else if (weather_icon === "Thunderstorm") {
    weather_icon = thunderstorm
  }
  else if (weather_icon === "Fog") {
    weather_icon = fog
  }
  else if (weather_icon === "Snow") {
    weather_icon = snow
  }
  else {
    weather_icon = sunny
  }
  
  const click = async () => {
    let input_value = document.querySelector('.input_text')
    if (input_value.value === "") {
      return 0
    }

    let city = input_value.value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8128d8aeab413cb86b94fb26daa9db42&units=metric`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);

    setName_city(data.name)
    setweather_icon(data.weather[0].main)
    setmax_temp(Math.floor(data.main.temp_max))
    setmin_temp(Math.floor(data.main.temp_min))
    setHumidity(Math.floor(data.main.humidity))
    setwindspeed(Math.floor(data.wind.speed))
    setheading(Math.floor(data.main.temp))

    input_value.value = ""
  }

  return (
    <div className='Container'>
      <div className="box">
        <div className="seacrh_box">
          <Input input_click = {click}/>
          <Search_button click_fn = {click}/>
        </div>

        <h2 className='Name_city'>{Name_city}</h2> 
        {Name_city ? <img src={weather_icon} alt="Loading..." className='weather_icon'/> : ""}
        {heading ? <h1 className='heading'>{heading}°C</h1> : ""}
        <div className='others'>
          <div className="temp">
            {max_temp ? <p className='max_temp'>Max-Temp : {max_temp}°C</p> : ""}
            {min_temp ? <p className='min_temp'>Min-Temp : {min_temp}°C</p> : ""}
          </div>
          <div className="others2">
            {Humidity ? <p className='Humidity'>Humditiy : {Humidity}%</p> : ""}
            {windspeed ? <p className='windspeed'>Wind-Speed : {windspeed}Km/hr</p> : ""}
          </div>
        </div>
        <img src={logo} alt="Loading" className='flow' />

      </div>
    </div>
  )
}

export default App
