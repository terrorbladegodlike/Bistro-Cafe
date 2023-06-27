import React, {useState} from 'react'

// import data
import {reservationData} from '../data'

// import datapicker
import DatePicker from 'react-datepicker'

// import datapicker css
import 'react-datepicker/dist/react-datepicker.css'

// import timepicker
import TimePicker from 'react-time-picker';

// import timepicker css
import '../timepicker.css'

// import react icons
import {FaUser, FaCalendar, FaClock} from 'react-icons/fa'

// import motion
import {motion} from 'framer-motion'

// import variants 
import {fadeIn, staggerContainer} from '../variants'

const Reservation = () => {

  // desctucture reservation data
  const {title, subtitle, modelImg, btnText} = reservationData;
  // data state
  const [startDate, setStartDate] = useState(new Date())
  // clock state
  const[value, setValue] = useState('10:00')

  return (
    <section className='relative top-96 z-30 p-20 lg:py-[100px]'>
      <div className="constainer mx-auto">
        {/* Text */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          className='text-center'
        >
          {/* Title */}
          <motion.h2 
            variants={fadeIn('up', 'tween', 0.2, 1.6)}
            className='h2 capitalize'
          >
            {title}
          </motion.h2>
          {/* Subtitle */}
          <motion.p
            variants={fadeIn('up', 'tween', 0.4, 1.6)} 
            className='mb-8 text-dark'
          >
            {subtitle}
          </motion.p>
          {/* Model */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 1.6)}
            className='flex justify-center mb-8'
          >
            <img src={modelImg} alt="img" />
          </motion.div>
        </motion.div>
        {/* Form */}
        <motion.form
          variants={fadeIn('up', 'tween', 0.7, 1.6)}
          initial='hidden'
          whileInView={'show'}
        >
          <div className='flex flex-col lg:flex-row gap-y-4 items-center justify-between mb-8'>
            {/* DataPicker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaCalendar/>
                <div>Choose Date</div>
              </div>
              <DatePicker 
                className='input'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* TimePicker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                  <FaClock/>
                  <div>Choose Time</div>
                </div>
                <TimePicker 
                  className='input'
                  clearIcon={false}
                  clockIcon={false}
                  onChange={setValue}
                  value={value}
                />
            </div>
            {/* Person Number */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaUser/>
                <div>How many people?</div>
              </div>
              <input className='input' type="text" placeholder='1'/>
            </div>
          </div>
          {/* Button */}
          <div className='max-w-[316px] mx-auto flex justify-center'>
            <button className='btn capitalize w-full lg:w-auto'>{btnText}</button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Reservation