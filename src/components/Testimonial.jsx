import React from 'react'

// import data
import {testimonialData} from '../data'

// import motion
import {motion} from 'framer-motion'

// import variants
import { fadeIn } from '../variants';

// import carousel
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../slider.css'


const Testimonial = () => {

  // destructure testimonials data
  const {title, subtitle, modelImg, slider} = testimonialData

  return (
    <section className='bg-testimonial bg-cover bg-no-repeat relative top-[340px] lg:top-[390px] z-10 h-[800px] pt-[60px] md:pt-[120px]'>
      <div className="container mx-auto">
        {/* Text */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1.6)}
          initial='hidden'
          whileInView={'show'}
          className='text-center capitalize flex flex-col items-center'
        >
          <h2 className='h2 text-white'>
            {title}
          </h2>
          <p className='text-white/70 capitalize mb-8'>
            {subtitle}
          </p>
          <div className='mb-12'>
            <img src={modelImg} alt="img" />
          </div>
        </motion.div>
        {/* Carousel */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1.6)}
          initial='hidden'
          whileInView={'show'}
          className='flex justify-center items-center'
        >
          <Carousel
            showStatus={false}
            showIndicators={false}
            autoPlay={false}
            showThumbs={false}
            infiniteLoop={true}
            className='w-full max-w-[1024px flex items-center justify-center]'
          >
            {slider.map((item, index) => {
              const {image, message, name, occupation} = item;
              return (
                <div className='max-w-[840px] mx-auto px-24 text-white' key={index}>
                  <div className='text-lg mb-9 lg:text-2xl leading-snug'>
                    {message}
                  </div>
                  <div className='max-w-[70px] lg:max-w-[100px] mx-auto mb-3'>
                    <img src={image} alt="img" />
                  </div>
                  <div className='font-bold text-[22px] text-accent'>
                    {name}
                  </div>
                  <div className='font-medium italic'>
                    {occupation}
                  </div>
                </div>
                )
              })}
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial