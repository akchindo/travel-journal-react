import React from 'react'
import japan from '../images/japan.png'
import '../styles/styles.css'
import  {ImLocation } from 'react-icons/im'

function Journal(props) {
  return (
    <div className='journal'>
      <div>
        <img src={`/images/${props.image}`} alt=""  className='image'/>
      </div>
      <div className='left'>
        <div className='grid'>
          < ImLocation className='location' />
          <span className='japan'>{props.country}</span>
          <span className='google'>View on Google Maps</span>
        </div>
        <h1 className='title'>{props.title}</h1>
        <p className='date'>{props.date}</p>
        <p className='description'>{props.description}</p>
      </div>
    </div>
  )
}

export default Journal