import React, { useState } from 'react'
import './Weather.css'
import axios from 'axios';


const Weather = () => {

    const [data, setData]= useState('')
    const [location, setLocation]= useState('')


    const searchLocation = (e)=>{

        if(e.key === 'Enter'){
            axios.get(url).then((response)=>{
                setData(response.data)
                console.log(response.data);
            })
            setLocation("")

        }
      
    }

  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=b941d782b4c557c220464412fa1ed980`

  

  return (
    <section className='container-1'>
     

<div className="search-1">
        <h3>Weather Locator</h3>
    <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text" />
       
</div>
       
        
        <div className='top-1'>
            <div className="name">
                <h2>{data.name}</h2>
            </div>
            <div className="temp-1">
                {
                    data.main ? <h1>{data.main.temp} °F</h1> : null
                }
            </div>
            <div className="status-1">
              {
                data.weather ? <p>{data.weather[0].description}</p> :null
              }
            </div>

        </div>
    {data.name !== undefined &&
        <div className="bottom-1">
            <div className="feel">
                {
                    data.main ? <h2>{data.main.feels_like} °F</h2>  :null
                }
                <p>Feels Like</p>
            </div>
            <div className="hum">
                {
                    data.main ? <h2>{data.main.humidity}%</h2> : null
                }
                <p>Humidity</p>
            </div>

            <div className="win">
                {
                    data.wind ? <h2>{data.wind.speed}</h2> : null
                }
                <p>Wind Speed</p>
            </div>

        </div>
    }

    </section>
  )
}

export default Weather