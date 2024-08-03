import React from 'react';
import { FaHome, FaChartLine, FaStickyNote, FaWallet, FaShoppingBag, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className='bg-secondary z-10 w-12 h-full fixed top-0 left-0 flex flex-col justify-between md:w-16'>
      <div className='flex items-center justify-center h-12'>
        <span className='text-white font-semibold text-xs md:text-lg cursor-pointer '>H</span>
        <span className='text-purple-600 font-semibold text-xs md:text-lg cursor-pointer'>K</span>
      </div>
      <div className='flex flex-col flex-grow justify-between'>
        <div className='flex flex-col'>
          <div className='text-white my-3 w-full flex justify-center'>
            <FaHome className="text-lg md:text-xl  hover:text-purple-600 cursor-pointer" />
          </div>
          <div className='text-white my-3 w-full flex justify-center'>
            <FaChartLine className="text-lg md:text-xl hover:text-purple-600 cursor-pointer" />
          </div>
          <div className='text-white my-3 w-full flex justify-center'>
            <FaStickyNote className="text-lg md:text-xl hover:text-purple-600 cursor-pointer" />
          </div>
          <div className='text-white my-3 w-full flex justify-center'>
            <FaWallet className="text-lg md:text-xl hover:text-purple-600 cursor-pointer" />
          </div>
          <div className='text-white my-3 w-full flex justify-center'>
            <FaShoppingBag className="text-lg md:text-xl  hover:text-purple-600 cursor-pointer" />
          </div>
        </div>
        <div className='flex justify-center mb-6'>
          <FaSignOutAlt className='text-white text-lg md:text-xl hover:text-purple-600 cursor-pointer' />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;