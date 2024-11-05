import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'; // Import icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-800 w-full h-16 flex items-center justify-between  px-4 md:px-10 relative">
      <div className="text-white">
        <h2>Tayyab Hakro</h2>
      </div>
      <div className="hidden md:flex items-center">
        <ul className="flex gap-9">
          <li className="group relative cursor-pointer">
            <Link to="/Protfilo_Web/" className="text-white">Home</Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="group relative cursor-pointer">
            <Link to="/Protfilo_Web/about" className="text-white">About Us</Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="group relative cursor-pointer">
            <Link to="/Protfilo_Web/contact" className="text-white">Contact</Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="group relative cursor-pointer">
            <Link to="/Protfilo_Web/work" className="text-white">Work</Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="group relative cursor-pointer">
            <Link to="/Protfilo_Web/services" className="text-white">Services</Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        </ul>
        {/* Social Media Icons */}
        <div className="flex items-center gap-4 ml-6">
          <Link to="https://www.linkedin.com/in/mohammad-tayyab-hakro-1231a0289/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-200 transition-colors duration-300">
            <FaLinkedin size={24} />
          </Link>
          <Link to="https://github.com/Tayyab-Hakro?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-200 transition-colors duration-300">
            <FaGithub size={24} />
          </Link>
          <Link to="https://www.youtube.com/@tayyabhakro2003" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-200 transition-colors duration-300">
            <FaYoutube size={24} />
          </Link>
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-slate-500 md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link to="/Protfilo_Web/" className="text-white" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/Protfilo_Web/about" className="text-white" onClick={toggleMenu}>About Us</Link>
            </li>
            <li>
              <Link to="/Protfilo_Web/contact" className="text-white" onClick={toggleMenu}>Contact</Link>
            </li>
            <li>
              <Link to="/Protfilo_Web/work" className="text-white" onClick={toggleMenu}>Work</Link>
            </li>
            <li>
              
              <Link to="/Protfilo_Web/services" className="text-white" onClick={toggleMenu}>Services</Link>
              <div className='flex justify-center items-center'>
              <Link to="https://www.linkedin.com/in/mohammad-tayyab-hakro-1231a0289/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-200 transition-colors duration-300">
            <FaLinkedin size={24} />
          </Link>
          <Link to="https://github.com/Tayyab-Hakro?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-200 transition-colors duration-300">
            <FaGithub size={24} />
          </Link>
          <Link to="https://www.youtube.com/@tayyabhakro2003" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-200 transition-colors duration-300">
            <FaYoutube size={24} />
          </Link>
          </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
