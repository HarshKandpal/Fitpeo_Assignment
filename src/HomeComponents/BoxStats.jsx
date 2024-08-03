import React from 'react';
import {StatsData} from '../Data/StatsData'
import { FaPlay} from 'react-icons/fa';
import { FaShoppingBag, FaDollarSign,FaBitbucket } from 'react-icons/fa';
function BoxStats() {
  return (
    <div className="w-full md:w-3/4 flex justify-around space-x-3">
      {
        StatsData && StatsData.map((stat,i)=>(
          <div key={stat.title} className='bg-secondary w-1/4 rounded-md flex flex-col justify-between '>
            <div className='flex flex-col'>
              <div className='m-2 h-10 w-10 flex bg-slate-800 items-center justify-center rounded-lg'>
                     {/* //Static images */}
                    { i==0? <FaBitbucket className='text-blue-500 text-xl'/>:
                     i==1?<FaShoppingBag className='text-green-500 text-xl'/>: 
                     i==2?<FaShoppingBag className='text-red-500 text-xl'/>:
                     <FaDollarSign className='text-pink-500 text-xl'/>
                    }
              </div>
              <div className='mx-2 text-xs font-semibold'>
                {stat.title}
              </div>
              </div>
              <div className='flex justify-between m-2 '>
                    <span className='text-xl font-semibold'>{stat.totalCount}</span>
                    <span className={`text-xs font-semibold flex items-center ${stat.status=='P'?
                    'text-green-500':'text-red-500'}`}><FaPlay className={`${stat.status=='P'?'-rotate-90':'rotate-90'} 
                    mr-1`}/>{stat.profit}</span>
              </div>
            </div>
        ))
      }
    </div>
  );
}

export default BoxStats;
