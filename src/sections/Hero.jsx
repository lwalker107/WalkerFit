import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/assets/icons'
import { bigShoe1 } from '../assets/assets/images'

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
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px]
        max-sm:leading-[82] font-bold'>
          <span
            className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>Let your fitness journey</span>
          <br /> begin <span
            className='text-teal inline-block mt-3'>anywhere</span> !
        </h1>

        <p className='font-montserrat text-slate-gray text-lg leading-8
        mt-6 mb-14 sm:max-w-sm'>
            See how far you can get today and sign up!
        </p>
        <Button label="Download now" iconURL={arrowRight}/>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen
      max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img 
          src={bigShoe1}
          alt='big shoe image'
          width={610}
          height={500}
          className='object-contain relative z-10'
        />
      </div>
    </section>
  )
}

export default Hero