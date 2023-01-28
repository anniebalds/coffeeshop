import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { ShoppingCart } from 'phosphor-react'

const Navbar = () => {

    useEffect(() => {
        fetch('https://apis.scrimba.com/openweathermap/data/2.5/weather?q=Morzine&units=metric')
        .then(res => res.json())
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById('weather').innerHTML = `
            <img src=${iconUrl}>
            <div className="weather-info">
                <p id="weather-temp">${Math.round(data.main.temp)}°</p>
                <p id="weather-city">${data.name}</p>
            </div>
            `
        })
        .catch(err => console.error(err))
    }, [])

  return (
    <div className='nav-bar'>
        <Link to='/' className='home-logo' id='home-logo'>Terrain</Link>
        <div id='weather'></div>
        <ul className='nav-links'>
            <Link to='/story'>Story</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/cart'><ShoppingCart size={24}/></Link>
        </ul>
    </div>
  )
}

export default Navbar