import React from 'react';
import { FaLaptopCode, FaBrush, FaCode, FaDesktop } from 'react-icons/fa';
import './index.css'; // Make sure to import your CSS file

function Services() {
  return (
    <div className="w-full min-h-screen bg-slate-800 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>

      {/* Services Cards */}
      <div className="w-full lg:w-2/3 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Service 1 */}
        <div className="bg-slate-800 shadow-lg p-6 rounded-lg flex flex-col items-center">
          <FaLaptopCode className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className="text-center">
            We create custom web applications tailored to your needs, using the latest technologies and best practices.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-slate-800 shadow-lg p-6 rounded-lg flex flex-col items-center">
          <FaBrush className="text-4xl text-green-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Web Design</h3>
          <p className="text-center">
            Our design team crafts visually appealing and user-friendly interfaces to enhance your brand's presence online.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-slate-800 shadow-lg p-6 rounded-lg flex flex-col items-center">
          <FaCode className="text-4xl text-yellow-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Full Stack Development</h3>
          <p className="text-center">
            We provide end-to-end solutions from front-end to back-end, ensuring a seamless and integrated user experience.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-slate-800 shadow-lg p-6 rounded-lg flex flex-col items-center">
          <FaDesktop className="text-4xl text-purple-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
          <p className="text-center">
            Our responsive designs ensure your website looks great on all devices, from mobile phones to desktop computers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
