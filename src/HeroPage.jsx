import React, { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import myouc from './mt.png';
import { motion } from 'framer-motion';
import { fadein } from './variants';
function HeroPage() {
  const [showModal, setShowModal] = useState(false);

  const handleContactClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div  className="w-full  bg-slate-700 h-full flex flex-col text-center sm:flex-row-reverse sm:flex-wrap p-10 items-center sm:items-start justify-center sm:justify-between">
        <motion.div     variants={fadein("left",0,2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.20 }} className="hpic w-[70%] sm:w-[40%] flex justify-center sm:justify-center mb-8 sm:mb-0">
          <img
            className="w-[80%] h-auto rounded-full sm:items-center sm:flex sm:justify-center"
            src={myouc}
            alt="Model"
          />
        </motion.div>

        <motion.div 
            variants={fadein("right", 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.90 }} className="textPoint text-center text-white p-20 mt-10 sm:text-left">
          <h1 className="text-4xl mb- font-black">
            Hi I am <span className="text-blue-400">Mohammad Tayyab</span>
          </h1>
          <h4 className="text-2xl mt-3 font-serif">
            & Expert Freelancer Full-Stack Developer
          </h4>
          <p className="text-[15px] mt-3 font-mono">
            My aim is to build high-quality websites for my clients. <br />
            I have experience in both Frontend and Backend development.
          </p>

          <h1 className="text-3xl mt-3 font-bold"></h1>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 mr-3">
      Click on Contact me get my number        
          </button>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
            onClick={handleContactClick}
          >
            Contact me
          </button>
        </motion.div>
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </div>

      {/* Modal for Contact Information */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <p className="mb-2">Phone: 03170027575</p>
            <p className="mb-2">WhatsApp: 03170027575</p>

            <p className="mb-2">Email: tayyabhakro2k21@gmail.com</p>
            <a
              href="/contact"
              className="text-blue-500 underline mb-4 block"
            >
              Go to my Contact Page
            </a>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
              onClick={handleContactClick}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default HeroPage;
