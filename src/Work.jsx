import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './index.css'; 

function Work() {
  return (
    <div className='w-full h-full flex justify-center  items-center bg-slate-800 p-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 lg:grid-cols-3  '>
        {/* Card 1 */}
        <div className='group bg-slate-700 border text-white  shadow-lg p-6 rounded-lg relative bg-slate-800 hover:shadow-xl transition-all hover:shake'>
          <h1 className='flex items-center text-xl font-bold'>
            Restaurant Website <FaArrowRight className='ml-2'/>
          </h1>
          <p className='my-2'>Short description of your project</p>
          <span>Write it here</span>
          <div className='mt-4'>
            <img 
              src='https://tse2.mm.bing.net/th?id=OIP.VrRE8fVQ3sahbTKmid94VwHaD4&pid=Api&P=0&h=220' 
              alt='Restaurant'
              className='rounded-lg'
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className='group bg-slate-700 text-white border shadow-lg p-6 rounded-lg relative bg-slate-800 hover:shadow-xl transition-all hover:shake'>
          <h1 className='flex items-center text-xl font-bold'>
            School Website <FaArrowRight className='ml-2'/>
          </h1>
          <p className='my-2'>Short description of your project</p>
          <span>Write it here</span>
          <div className='mt-4'>
            <img 
              src='https://tse3.mm.bing.net/th?id=OIP.uX42eEGDVssBT65xA5bzuAHaEm&pid=Api&P=0&h=220' 
              alt='Restaurant'
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='group 
         border shadow-lg  text-white p-6 rounded-lg relative bg-slate-600 hover:shadow-xl transition-all hover:shake'>
          <h1 className='flex items-center text-xl font-bold'>
            Twitter Clome <FaArrowRight className='ml-2'/>
          </h1>
          <p className='my-2'>Short description of your project</p>
          <span>Write it here</span>
          <div className='mt-4'>
            <img 
              src='https://tse2.mm.bing.net/th?id=OIP.bUQ6ASC21VBaNerNOsIFwAHaFS&pid=Api&P=0&h=220' 
              alt='Restaurant'
              className='rounded-lg'
            />
          </div>
        </div>

        <div className='group 
         border shadow-lg p-6 rounded-lg relative bg-slate-800 text-white hover:shadow-xl transition-all hover:shake'>
          <h1 className='flex items-center text-xl font-bold'>
            Hospital Website <FaArrowRight className='ml-2'/>
          </h1>
          <p className='my-2'>Short description of your project</p>
          <span>Write it here</span>
          <div className='mt-4'>
            <img 
              src='https://tse4.mm.bing.net/th?id=OIP.M3qRCJgxGNWb0CUm_hyfZAAAAA&pid=Api&P=0&h=220' 
              alt='Restaurant'
              className='rounded-lg'
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className='group  border shadow-lg p-6 rounded-lg relative text-white bg-slate-800-300 hover:shadow-xl transition-all hover:shake'>
          <h1 className='flex items-center text-xl font-bold'>
            Restaurant Website <FaArrowRight className='ml-2'/>
          </h1>
          <p className='my-2'>Short description of your project</p>
          <span>Write it here</span>
          <div className='mt-4'>
            <img 
              src='https://tse4.mm.bing.net/th?id=OIP.M3qRCJgxGNWb0CUm_hyfZAAAAA&pid=Api&P=0&h=220' 
              alt='Restaurant'
              className='rounded-lg'
            />
          </div>
        </div>

        {/* Card 4 */}
        <div className='group text-white  border shadow-lg p-6 rounded-lg relative bg-slate-800 hover:shadow-xl transition-all hover:shake'>
          <h1 className='flex items-center text-xl font-bold'>
            Restaurant Website <FaArrowRight className='ml-2'/>
          </h1>
          <p className='my-2'>Short description of your project</p>
          <span>Write it here</span>
          <div className='mt-4'>
            <img 
              src='https://tse4.mm.bing.net/th?id=OIP.M3qRCJgxGNWb0CUm_hyfZAAAAA&pid=Api&P=0&h=220' 
              alt='Restaurant'
              className='rounded-lg'
            />
          </div>
        </div>

        {/* Add more cards if needed */}
      </div>
    </div>
  );
}

export default Work;
