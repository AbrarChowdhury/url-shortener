import React from 'react'
import Card from './card/Card'
import bRIcon from "../images/icon-brand-recognition.svg"
import dRIcon from "../images/icon-detailed-records.svg"
import fCIcon from "../images/icon-fully-customizable.svg"
import { Grid } from '@mui/material'
function Body() {
  return (
    <div id="body" className='container'>
    <h1>Advanced Statistics</h1>
    <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
    <div id="cards-container">
    <Grid container spacing={4}>
      <Grid item xs={12} lg={4}>
        <Card
          icon={bRIcon} 
          title="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links doen't mean a thing. Branded links help instil confidence in your content."
        /> 
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card
          icon={dRIcon} 
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        /> 
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card
          icon={fCIcon} 
          title="Fully Customizable"
          text="improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        /> 
      </Grid>
    </Grid>
    </div>

    </div>
  )
}

export default Body