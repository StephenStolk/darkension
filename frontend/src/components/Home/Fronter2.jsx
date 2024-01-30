import React from 'react'

const Fronter2 = () => {
  return (
    <section className='w-[95%] flex justify-around items-center mx-auto'>
        <div className='w-1/4'>
            <div className='flex flex-col justify-center'>
                <h1 className=''>Why are we better than others ?</h1>
                <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
        <div className='w-[3/4] lg:w-3/4'>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-10 gap-8'>
            <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center justify-center hover:-translate-y-4 transition-all duration-300'>
                <div className='w-[full] h-[full] justify-center mx-auto'>
                <img src="./public/f1.png" className='w-[80%] mx-auto'></img>
                <p className='mx-[1rem] text-white text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
            <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center justify-center hover:-translate-y-4 transition-all duration-300 md:mt-16'>
                <div className=''>
                <img src="./public/f1.png" className='w-[80%]'></img>
                <p className='mx-[1rem] text-white text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
            <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center justify-center hover:-translate-y-4 transition-all duration-300'>
                <div className=''>
                <img src="./public/f1.png" className='w-[80%]'></img>
                <p className='mx-[1rem] text-white text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Fronter2