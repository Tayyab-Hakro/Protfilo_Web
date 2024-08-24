import React from 'react'

function Contact() {
  return (
    <>

      {/* Form Section */}
      <div className="w-full lg:w-2/3 mx-auto mt-4  bg-slate-700 shadow-lg p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="flex flex-col gap-4">
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
          <textarea
            placeholder="Message"
            rows="4"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      </>
  )
}

export default Contact