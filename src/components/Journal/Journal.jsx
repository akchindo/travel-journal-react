import React from 'react'
import japan from '../images/japan.png'
import '../styles/styles.css'
import  {ImLocation } from 'react-icons/im'

function Journal() {
  return (
    <div className='journal'>
      <div>
        <img src={japan} alt=""  className='image'/>
      </div>
      <div>
        <div className='grid'>
          < ImLocation className='location' />
          <span className='japan'>JAPAN</span>
          <span className='google'>View on Google Maps</span>
        </div>
        <h1 className='title'>Mount Fuji</h1>
        <p className='date'>12 Jan, 2021 - 24 Jan, 2021</p>
        <p className='description'> Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists. </p>
      </div>
    </div>
  )
}

export default Journal