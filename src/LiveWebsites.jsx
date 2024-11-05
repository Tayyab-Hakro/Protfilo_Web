import React from 'react';
import E_Commerce from './wEB.png'; // Ensure this path is correct
import { Link } from 'react-router-dom';
import CatchMole from './CatchMole.png';

function LiveWebsites() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Live Websites</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
        
        {/* E-Commerce Project Card */}
        <div className="card bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img src={E_Commerce} alt="E_Commerce" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">E-Commerce</h3>
            <p className="mb-4">Check live demo.</p>
            <Link
              to="https://tayyab-hakro.github.io/E_Commerce_Frontend/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Live Demo
            </Link>
          </div>
        </div>

        {/* Catch Mole Project Card */}
        <div className="card bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img src={CatchMole} alt="Catch Mole" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Catch Mole</h3>
            <p className="mb-4">Check live demo.</p>
            <Link
              to="https://tayyab-hakro.github.io/Catch-Mole_Game2/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Live Demo
            </Link>
          </div>
        </div>

        {/* Placeholder Project Card 1 */}
        <div className="card bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img src={E_Commerce} alt="Project Three" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">In Progress</h3>
            <p className="mb-4">Still working on this project.</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Placeholder Project Card 2 */}
        <div className="card bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img src={E_Commerce} alt="Project Four" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">In Progress</h3>
            <p className="mb-4">Still working on it.</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
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
