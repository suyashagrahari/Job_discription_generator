import React from 'react'
import Right from "../images/right.png"
import CompanyRating from './CompanyRating'
const Tabs = () => {
  return (
    <>
    <CompanyRating/>
    <div className='flex flex-row sm:gap-[8rem] gap-10 justify-center flex-wrap  sm:mt-20 mt-10'>
    
     <div className='flex sm:flex-row flex-col sm:text-lg font-medium text-sm gap-2 py-3 items-center justify-center w-[366px]  bg-white rounded-xl text-black'>
            <img src={Right} alt="Right icon" className='md:w-10 w-8'/>
            5x more applicants
        </div>
        <div className='flex sm:flex-row flex-col sm:text-lg  font-medium text-sm gap-2 py-3 items-center justify-center w-[366px]  bg-white rounded-xl text-black '>
            <img src={Right} alt="Right icon" className='md:w-10 w-8' />
            Save up to 90% time with AI
        </div>
        <div className='flex sm:flex-row flex-col sm:text-lg  font-medium text-sm gap-2 py-3 items-center  justify-center w-[366px]  bg-white rounded-xl text-black '>
            <img src={Right} alt="Right icon" className='md:w-10 w-8' />
            100% DEI optimized
        </div>
    </div>
    </>
  )
}

export default Tabs