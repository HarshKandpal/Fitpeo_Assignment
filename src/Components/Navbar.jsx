import React, { useState } from 'react';
import { FaEnvelope, FaCog, FaBell, FaUser,FaSearch,FaBars } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-secondary z-10 text-white h-12 sticky top-0 flex items-center px-4 md:px-6 w-full">
      
      <div className="flex-grow flex items-center max-w-full relative">
        <FaSearch className="absolute left-2 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-700 focus:bg-slate-800 rounded-lg pl-8 pr-2 h-8 font-medium text-xs border border-gray-500 focus:outline-none focus:border-gray-600 w-1/2 md:w-64 max-w-xs md:max-w-sm"
        />
      </div>

      {/* Window view */}
      <div className="hidden md:flex items-center space-x-2 md:space-x-4">
        <button className='bg-gray-500 rounded-full h-8 w-8 hover:bg-purple-600 transition duration-300 flex items-center justify-center'>
          <FaEnvelope className='h-4 w-4'/>
        </button>
        <button className='bg-gray-500 rounded-full h-8 w-8 hover:bg-purple-600 transition duration-300 flex items-center justify-center'>
          <FaCog className='h-4 w-4'/>
        </button>
        <button className='bg-gray-500 rounded-full h-8 w-8 hover:bg-purple-600 transition duration-300 flex items-center justify-center'>
          <FaBell className='h-4 w-4'/>
        </button>
        <button className='bg-gray-500 rounded-full h-8 w-8 hover:bg-purple-600 transition duration-300 flex items-center justify-center'>
          <FaUser className='h-4 w-4'/>
        </button>
      </div>

      {/* Mobile view */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 md:hidden transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center space-y-4 p-4`}>
        <button onClick={toggleMenu} className="text-white font-semibold text-2xl">Close</button>
        <div className='flex flex-col items-center space-y-4'>
          <button className='bg-gray-500 rounded-full h-8 w-8 hover:bg-purple-600 transition duration-300 flex items-center justify-center'>
            <FaEnvelope className='h-4 w-4'/>
          </button>
          <button className='bg-gray-500 rounded-full h-8 w-8 hover:bg-purple-600 transition duration-300 flex items-center justify-center'>
            <FaCog className='h-4 w-4'/>
          </button>
          <button className='bg-gray-500 rounded-full h-8 w-8 hover:bg-purple-600 transition duration-300 flex items-center justify-center'>
            <FaBell className='h-4 w-4'/>
          </button>
          <button className='bg-gray-500 rounded-full h-8 w-8 hover:bg-purple-600 transition duration-300 flex items-center justify-center'>
            <FaUser className='h-4 w-4'/>
          </button>
        </div>
      </div>
      <button 
        className="md:hidden flex items-center p-2"
        onClick={toggleMenu}
      >
       <FaBars className="w-6 h-6" />
      </button>
    </div>
  );
}

export default Navbar;
