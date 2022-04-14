import React from 'react'
import "./card.style.scss"
function Card({icon,title,text}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Card