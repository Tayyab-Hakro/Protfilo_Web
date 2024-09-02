import React from 'react';
import E_Commerce from './wEB.png'; // Ensure this path is correct
import  {Link} from 'react-router-dom'
import CatchMole from './CatchMole.png'
function LiveWebsites() {
  return (
    <div className="bg-slate-700 px-4 py-8 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-3">Live Websites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <img src={E_Commerce} alt="E_Commerce" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">E_Commerce</h3>
            <p className="text-white mb-4">Check live demo.</p>
            <Link
              to="https://tayyab-hakro.github.io/E_Commerce_Frontend/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
            >
              Live Demo
            </Link>
          </div>
        </div>
        
        <div className="card">
          <img src={CatchMole} alt="Project Two" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Match Mole</h3>
            <p className="text-white mb-4">Check live Demo</p>
            <Link
              to="https://tayyab-hakro.github.io/Catch-Mole_Game2/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
            >
              Live Demo
            </Link>
          </div>
        </div>

        <div className="card">
          <img src={E_Commerce} alt="Project Three" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Still work</h3>
            <p className="text-white mb-4">still working</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="card">
          <img src={E_Commerce} alt="Project Four" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Still work</h3>
            <p className="text-white mb-4">Still working on it .</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveWebsites;
