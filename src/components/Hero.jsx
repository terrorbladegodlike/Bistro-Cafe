import React from 'react'

// Import data
import {heroData} from '../data'

// Import component
import Header from './Header';

// Import Motion
import {motion} from 'framer-motion'

// import Variant
import {fadeIn, staggerContainer} from '../variants'


const Hero = () => {

  // destructure hero data
  const {pretitle, title, subtitle, btnText} = heroData


  return (
    <section className='min-h-[980px] bg-hero bg-cover bg-right'>
      {/* Header */}
      <Header/>
      <div className="container mx-auto min-h-[980px] flex justify-center items-center">
        {/* Text */}
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial='hidden'
          whileInView={'show'} 
          className='text-center flex flex-col items-center'
        >
          {/* Pretitle */}
          <motion.div 
            variants={fadeIn('down', 'tween', 0.2, 1.1)}
            className='text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1'
          >
            {pretitle}
          </motion.div>
          {/* Title */}
          <motion.h1
            variants={fadeIn('down', 'tween', 0.3, 1.1)}
            className='h1 mb-5'
          >
            {title}
          </motion.h1>
          {/* Subtitle */}
          <motion.p 
            variants={fadeIn('down', 'tween', 0.4, 1.1)}
            className='text-white max-w-[540px] mb-8'
          >
            {subtitle}
          </motion.p>
          {/* Button */}
          <motion.div
            variants={fadeIn('down', 'tween', 0.5, 1.1)}
          >
            <button className='btn'>{btnText}</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero