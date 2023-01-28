import React from 'react'
import { useEffect } from 'react'

const Footer = () => {

    useEffect(() => {
        const date = new Date()
        document.getElementById("time").textContent = date.toLocaleTimeString("en-fr", {timeStyle: "short"})
    }, [])

  return (
    <div className='footer'>
        <h2 id='time' className='time'></h2>
    </div>
  )
}

export default Footer