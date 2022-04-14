import React from 'react'
import illustation from "../images/illustration-working.svg"
import "./common.styles.scss"
function Hero() {
  return (
    <div id="hero">
        <img src={illustation} alt="" />
        <div>
            <h1>More than just shorter links</h1>
            <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Hero