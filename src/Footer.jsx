import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import './index.css'; // Make sure to import your CSS file
import { motion } from 'framer-motion';
import { fadein } from './variants';
function Footer() {
  return (
    <footer 
 className="w-full bg-gray-800 text-white py-8 px-4 ">
      <motion.div     variants={fadein("up",0.10)}
      initial='hidden'
      whileInView={"show"}
      viewport={{once:false, amount:0.20}} className="container sm:items-center sm:justify-center text-center  md:mx-auto flex flex-col lg:flex-row md:justify-between md:items-start">
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold mb-2">MyWebsite</h2>
          <p className="text-gray-400">
            A place where creativity meets technology. Bringing your digital presence to life with cutting-edge design and development.
          </p>
        </div>

        {/* Section 2: Navigation Links */}
        <div className="flex-1 mb-6 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Section 3: Contact Info and Social Media */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-4 justify-center items-center">Contact Us</h3>
          <a href="mailto:contact@mywebsite.com" className="flex justify-center items-center mb-4 hover:underline">
            <AiOutlineMail className="text-2xl mr-2" /> tayyabhakro2k21@gmail.com
          </a>
          <div className="flex justify-center text-center space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
