import React from 'react'
import '../CSS/hero.css'

function Hero() {
  return (
    <>
        <div className='hero'>
            <div className='heroHeading'>
            <h1>More than just shorter links</h1>
            <p>Build your shorter links for you needs</p>
            </div>
            <div className='heroBackground'>
            <img src='https://cdn3d.iconscout.com/3d/premium/thumb/email-app-design-5984584-4971254.png' alt='background'></img>
            </div>
        </div>
    </>
  )
}

export default Hero;