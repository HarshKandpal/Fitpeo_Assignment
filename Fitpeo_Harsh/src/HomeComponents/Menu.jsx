import React from 'react';
import { FaBullseye, FaImage } from 'react-icons/fa'; // Target and Image icons
import { GiHamburger } from 'react-icons/gi'; // Food-related burger icon

function Menu() {
  return (
    <div className='bg-secondary w-full md:w-1/4 rounded-md md:h-46 p-4'>
      <div className='flex flex-col gap-y-4'>
        {/* Goals Section */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-2'>
            <div className='bg-red-500 p-2 rounded-full'>
              <FaBullseye color='white' />
            </div>
            <span className='text-white'>Goals</span>
          </div>
          <div className='bg-gray-600 p-2 rounded-full text-white text-center w-6 h-6 flex items-center justify-center'>
            {">"}
          </div>
        </div>

        {/* Popular Dishes Section */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-2'>
            <div className='bg-blue-500 p-2 rounded-full'>
              <GiHamburger color='white' />
            </div>
            <span className='text-white'>Popular Dishes</span>
          </div>
          <div className='bg-gray-600 p-2 rounded-full text-white text-center w-6 h-6 flex items-center justify-center'>
            {">"}
          </div>
        </div>

        {/* Menus Section */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-2'>
            <div className='bg-green-500 p-2 rounded-full'>
              <FaImage color='white' />
            </div>
            <span className='text-white'>Menus</span>
          </div>
          <div className='bg-gray-600 p-2 rounded-full text-white text-center w-6 h-6 flex items-center justify-center'>
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
