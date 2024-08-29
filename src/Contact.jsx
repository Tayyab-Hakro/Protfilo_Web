import React from 'react'

function Contact() {
  return (
    <>

    
      <div className="w-full lg:w-[40%]  mx-auto mt-4  bg-slate-700 shadow-lg p-10 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4   sm:justify-center flex sm:items-centerflex-wrap">Contact Us</h2>
        <form className="flex flex-col md:flex-wrap sm:flex sm:w-full sm:justify-center sm:items-center mt-10 gap-4">
          <div className='flex gap-8'>
          <input
            type="text"
            placeholder="Name"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-lg"
          />
          </div>
          <div className='mt-10 items-start md:flex sm:justify-center  '>
          <textarea
            placeholder="Message"
            rows="6"
            className="p-2  px-36 border border-gray-300 rounded-lg"
          />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      </>
  )
}

export default Contact