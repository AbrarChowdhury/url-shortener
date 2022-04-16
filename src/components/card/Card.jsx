import { Paper } from '@mui/material'
import React from 'react'
import "./card.style.scss"
function Card({icon,title,text}) {
  return (
    <div className="cardWrap">
    <br />
    <Paper elevation={1} style={{height:'100%'}}>
      <div className='card'>
        <div className='image-container'>
          <img src={icon} />
        </div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </Paper>
    </div>
  )
}

export default Card