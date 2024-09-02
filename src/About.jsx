import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGit, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiNodedotjs } from 'react-icons/si';
import './index.css'; // Make sure to import your CSS file
import myouc from './mt.png';

function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-slate-800 p-6">
      <h1 className="text-4xl font-bold mb-8 text-white">Tayyab Hakro</h1>
      
      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-center bg-slate-800 shadow-lg p-6 rounded-lg mb-8">
        <img
          src={myouc}
          alt="Tayyab Hakro"
          className="w-32 h-32 rounded-full mb-4 lg:mb-0 lg:mr-8"
        />
        <div>
          <h1 className="text-2xl font-bold text-center text-white">About Me</h1>
          <p className="mt-4 text-white">
            Hi, I'm Tayyab Hakro, a passionate full-stack web developer. I specialize in designing and developing visually appealing and functional websites. I have experience with a range of programming languages and platforms including HTML, CSS, JavaScript, MongoDB, React.js, Express.js, Node.js, Tailwind CSS, and responsive design. I enjoy collaborating with other developers and designers and am committed to staying updated with industry trends and best practices.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Download CV
          </button>
        </div>
      </div>

      {/* Uncomment if needed */}
      {/* 
      <div className="w-full lg:w-2/3 mb-8">
        <h2 className="text-2xl font-bold mb-4 items-center flex justify-center text-white">Experience</h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 sm:justify-center md:justify-between lg:grid-cols-1">
          <p></p>
        </div>
      </div>
      */}

      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-4 items-center text-center text-white sm:flex sm:justify-center md:flex">Skills</h2>
        <div className="flex flex-wrap gap-6 grid-cols-5 sm:flex-col md:grid-cols-5 md:flex-row md:gap-10 sm:grid-cols-4 justify-center">
          <div className="flex items-center flex-col">
            <FaHtml5 className="text-4xl text-orange-600" />
            <span className="text-white">HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-4xl text-blue-600" />
            <span className="text-white">CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <FaJsSquare className="text-4xl text-yellow-500" />
            <span className="text-white">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-4xl text-blue-400" />
            <span className="text-white">React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress className="text-4xl text-black" />
            <span className="text-white">Express</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="text-4xl text-green-500" />
            <span className="text-white">MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNodedotjs className="text-4xl text-green-700" />
            <span className="text-white">Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGit className="text-4xl text-orange-700" />
            <span className="text-white">Git</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGithub className="text-4xl text-gray-800" />
            <span className="text-white">GitHub</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLinkedin className="text-4xl text-blue-700" />
            <span className="text-white">LinkedIn</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
