import React from 'react';
import Model from './model in.png';
import { FaArrowDown } from 'react-icons/fa';
import myouc from './mt.png'
import './Home.css'
function HeroPage() {
  return (
<>
<div className="w-full h-full flex flex-col sm:flex-row-reverse sm:flex-wrap p-10 items-center sm:items-start justify-center sm:justify-between">
      <div className="hpic w-[70%] sm:w-[40%] flex justify-center sm:justify-center mb-8 sm:mb-0">
        <img className="w-[80%] h-auto rounded-full sm:items-center" src={myouc} alt="Model" />
      </div>

      <div className=" textPoint text-center p-12 mt-10 sm:text-left">
        <h1 className="text-4xl font-bold"> Mohammad Tayyab Hakro</h1>
        <h1 className="text-3xl mt-3 font-bold"> Expert Freelancer </h1>
        <h1 className="text-3xl mt-3 font-bold">Web Developer</h1>
        <button className='mt-4 px-4 py-2 bg-blue-500 mr-3'>Hire me</button>
        <button className='mt-4 px-4 py-2 bg-blue-500'>Contact me</button>


      
      </div>
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>

      
    </div>
    <a href="#work" className='home__scroll'>
    <div className='home__scroll-box flex justify-center items-start'>

    </div>
    <span className='home__scroll-text flex justify-center items-stat text-white text-2xl font-sans font-bold '>Recent work</span>
    
</a>
</>
  );
}

export default HeroPage;
