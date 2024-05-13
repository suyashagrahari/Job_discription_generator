import React from 'react';

const Cards = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 sm:py-24 mx-auto">
          <h1 className="text-4xl sm:font-bold font-semibold title-font text-gray-900 mb-12 text-center">Explore other free tools</h1>

          <div className="flex flex-wrap justify-center">
            <div className="sm:p-4 md:w-1/3 w-full pb-12">
              <div className="h-full bg-footer-col p-8 rounded-2xl flex flex-col justify-between">
                <div className='flex flex-col gap-5 justify-start'>
                  <p className="leading-relaxed md:text-3xl sm:text-2xl text-xl text-black sm:font-semibold font-bold text-wrap  sm:mt-2">Free Interview Questions Generator</p>
                  <p className="leading-relaxed  ">Generate interview questions for any job role and seniority in seconds</p>
                  <button className='bg-button-col w-full lg:w-[200px] md:h-[57px] sm:w-[200px] sm:h-[45px] w-[140px] h-[35px] rounded-lg text-white sm:text-base text-sm font-semibold'>
                    Get started now
                  </button>
                </div>
              </div>
            </div>

            <div className="sm:p-4 md:w-1/3 w-full pb-10">
              <div className="h-full bg-footer-col p-10 rounded-2xl flex flex-col justify-between ">
                <div className='flex flex-col gap-5  justify-start'>
                  <p className="leading-relaxed  pb-3 md:text-3xl sm:text-2xl text-xl text-black sm:font-semibold font-bold text-wrap  sm:mt-2">Free Salary Finder</p>
                  <p className="leading-relaxed  pb-3 ">Find the salary range for any job title, industry and location in seconds</p>
                  <button className='bg-button-col w-full lg:w-[200px] md:h-[57px] sm:w-[180px] sm:h-[45px] w-[140px] h-[35px] rounded-lg text-white sm:text-base text-sm font-semibold'>
                    Get started now
                  </button>
                </div>
              </div>
            </div>

            {/* Implementing the provided HTML code below */}
            <div className="sm:p-4 md:w-2/3 w-full">
              <div className="h-full bg-footer-col p-8 rounded-2xl flex flex-col justify-between">
                <div className='flex flex-col gap-5 sm:items-center sm:justify-ccenter justify-start'>
                  <p className="leading-relaxed sm:mb-6 md:text-3xl sm:text-2xl text-xl text-black sm:font-semibold font-bold text-wrap sm:text-center sm:mt-2">Free HR Email Template Generator</p>
                  <p className="leading-relaxed sm:mb-8 sm:w-[50%] w-[90%] sm:text-center">Create professional HR email templates for the entire employee lifecycle in seconds</p>
                  <button className='bg-button-col w-full lg:w-[250px] md:h-[57px] sm:w-[200px] sm:h-[45px] w-[140px] h-[35px] rounded-lg text-white sm:text-base text-sm font-semibold'>
                    Get started now
                  </button>
                </div>
              </div>
            </div>

            
            {/* End of provided HTML code */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
