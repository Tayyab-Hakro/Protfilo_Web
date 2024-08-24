import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGit, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiNodedotjs } from 'react-icons/si';
import './index.css'; // Make sure to import your CSS file
import myouc from './mt.png'
function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-slate-800 p-6">
      <h1 className="text-4xl font-bold mb-8">Tayyab Hakro</h1>
      
      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-center bg-slate-800 shadow-lg p-6 rounded-lg mb-8">
        <img
          src={myouc}
          alt="Tayyab Hakro"
          className="w-32 h-32 rounded-full mb-4 lg:mb-0 lg:mr-8"
        />
        <div>
          <h1 className="text-2xl font-bold">About Me</h1>
          <p className="mt-4">
            Hi, I'm Tayyab Hakro, a passionate full-stack web developer. I specialize in designing and developing visually appealing and functional websites. I have experience with a range of programming languages and platforms including HTML, CSS, JavaScript, MongoDB, React.js, Express.js, Node.js, Tailwind CSS, and responsive design. I enjoy collaborating with other developers and designers and am committed to staying updated with industry trends and best practices.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Download CV
          </button>
        </div>
      </div>

      <div className="w-full lg:w-2/3 mb-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="group bg-slate-800 shadow-lg p-6 rounded-lg relative overflow-hidden">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="mt-2 group-hover:opacity-0 transition-opacity duration-300">Short description...</p>
            <div className="absolute inset-0 bg-white p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p>Detailed information about the first project goes here. It's a comprehensive and engaging project that showcases my skills and expertise in web development.</p>
            </div>
          </div>
          <div className="group bg-slate-800 shadow-lg p-6 rounded-lg relative overflow-hidden">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="mt-2 group-hover:opacity-0 transition-opacity duration-300">Short description...</p>
            <div className="absolute inset-0 bg-white p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p>Detailed information about the second project goes here. It's a comprehensive and engaging project that showcases my skills and expertise in web development.</p>
            </div>
          </div>
          <div className="group bg-slate-800 shadow-lg p-6 rounded-lg relative overflow-hidden">
            <h3 className="text-xl font-bold">Project 3</h3>
            <p className="mt-2 group-hover:opacity-0 transition-opacity duration-300">Short description...</p>
            <div className="absolute inset-0 bg-white p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p>Detailed information about the third project goes here. It's a comprehensive and engaging project that showcases my skills and expertise in web development.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-4xl text-orange-600" />
            <span>HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-4xl text-blue-600" />
            <span>CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <FaJsSquare className="text-4xl text-yellow-500" />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-4xl text-blue-400" />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress className="text-4xl text-black" />
            <span>Express</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="text-4xl text-green-500" />
            <span>MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNodedotjs className="text-4xl text-green-700" />
            <span>Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGit className="text-4xl text-orange-700" />
            <span>Git</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGithub className="text-4xl text-gray-800" />
            <span>GitHub</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLinkedin className="text-4xl text-blue-700" />
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
