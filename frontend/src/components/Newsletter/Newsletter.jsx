import React from 'react'

const Newsletter = () => {
  return (
    <>
        <section className='w-full flex flex-col md:flex-row p-[2rem] bg-gray-800'>
           <div className='w-full sm:w-[1/2] flex flex-col mt-[3rem]'>
           <div className='flex flex-col mx-auto'>
                <h1 className='text-[4rem] font-[Poppins] font-semibold text-gray-500 text-center'> Newsletter</h1>
                <span className='text-xl font-semibold text-gray-500 font-[Poppins] text-center'> Subscribe to learn more! </span>
            </div>
            <div className='flex w-[90%] md:w-[80%] mx-auto bg-gray-500 p-[0.3rem] md:p-[1rem] rounded-lg mt-[2rem]'>
            <input
            type="text"
            placeholder="Email"
            className="border-2 rounded-lg w-full h-12 px-4 border-r-0 rounded-r-none"
          />
          <button
            className="bg-red-400 text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 rounded-l-none text-sm md:text-md"
          >
            Subscribe
          </button>
            </div>
           </div>
            <div className='hidden md:flex mx-auto justify-center w-full sm:w-[1/2]'>
                <img src='news.png' alt='image' className='w-[25rem] h-[25rem] rounded-full'></img>
            </div>
        </section>
            <section className='flex text-md p-[1rem] font-semibold text-gray-500 font-[Poppins] text-center border-t-1 bg-gray-800 mt-[0.2rem]'>
            Copyright@ 2024 Made with ❤️ by Shikhar Burman
        </section>
          {/* <input
            type="text"
            placeholder="Email"
            className="border-2 rounded-lg w-full h-12 px-4"
          />
          <button
            className="bg-red-400 text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full"
          >
            Subscribe
          </button> */}
        
    </>
  )
}

export default Newsletter