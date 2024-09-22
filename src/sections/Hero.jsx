import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/assets/icons'

const Hero = () => {
  return (
    <section 
      id='home' 
      className='w-full flex 
      xl:flex-row flex-col 
      justify-center min-h-screen 
      gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col 
      justify-center items-start w-full max-xl:padding-x pt-28'>
        <h1>
          <span>Let YOUR fitness journey</span>
          <br />
          <span>begin anywhere!</span>
          <p>
            See how far you can get today and sign up!
          </p>
          <Button label="Download now" iconURL={arrowRight}/>
        </h1>
      </div>

    </section>
  )
}

export default Hero