import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './index.css'; 
import { motion } from 'framer-motion';
import { fadein } from './variants';
import Chat_Clone from './Allvideos/ChatApp.webm';
import Netflix_Clone from './Allvideos/Nextflex video.webm';
import Twitter_Clone from './Allvideos/Twiiter Clone.webm';
import Ecommerce_Web from './Allvideos/E_Commerce_frontend.mp4';

function Work() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center">
      {/* Header Section */}
      <h1 className="text-3xl w-full p-10 font-bold font-mono text-center text-white">
        My Full Stack Projects
      </h1>

      {/* Main Content Section */}
      <div className="w-full h-full flex justify-center items-center px-4 sm:px-20 pb-20">
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-6xl"
          variants={fadein("down", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.20 }}
        >
          {/* Project Cards */}
          <motion.div 
            variants={fadein("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.20 }}
            className="group bg-slate-700 border border-gray-600 text-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <h1 className="flex items-center text-xl font-bold">
              Netflix Clone <FaArrowRight className="ml-2"/>
            </h1>
            <p className="my-2 text-white">A clone of the popular Netflix app with custom features and UI.</p>
            <span className="text-white">Video Demo:</span>
            <div className="mt-4">
              <video src={Netflix_Clone} controls alt="Netflix Clone" className="rounded-lg w-full" />
            </div>
          </motion.div>

          {/* Other project cards follow the same structure as the first card */}
          <motion.div 
            variants={fadein("down", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.20 }}
            className="group bg-slate-700 border border-gray-600 text-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <h1 className="flex items-center text-xl font-bold">
              E-commerce Platform <FaArrowRight className="ml-2"/>
            </h1>
            <p className="my-2 text-white">An online store with modern design and robust functionality.</p>
            <span className="text-white">Video Demo:</span>
            <div className="mt-4">
              <video src={Ecommerce_Web} controls alt="E-commerce Platform" className="rounded-lg w-full" />
            </div>
          </motion.div>

          <motion.div 
            variants={fadein("down", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.20 }}
            className="group bg-slate-700 border border-gray-600 text-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <h1 className="flex items-center text-xl font-bold">
              Twitter Clone <FaArrowRight className="ml-2"/>
            </h1>
            <p className="my-2 text-white">A replica of the Twitter interface with real-time functionality.</p>
            <span className="text-white">Video Demo:</span>
            <div className="mt-4">
              <video src={Twitter_Clone} controls alt="Twitter Clone" className="rounded-lg w-full" />
            </div>
          </motion.div>

          <motion.div 
            variants={fadein("up", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.20 }}
            className="group bg-slate-700 border border-gray-600 text-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <h1 className="flex items-center text-xl font-bold">
              Hospital Website <FaArrowRight className="ml-2"/>
            </h1>
            <p className="my-2 text-white">A website for a hospital featuring a dynamic and responsive design.</p>
            <span className="text-white">Video Demo:</span>
            <div className="mt-4">
              <video src={Chat_Clone} controls alt="Hospital Website" className="rounded-lg w-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Work;
