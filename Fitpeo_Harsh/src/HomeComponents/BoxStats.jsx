import React from 'react';
import {StatsData} from '../Data/StatsData'
import { FaPlay} from 'react-icons/fa';
function BoxStats() {
  return (
    <div className="w-full md:w-3/4 flex justify-around space-x-3">
      {
        StatsData && StatsData.map((stat)=>(
          <div key={stat.title} className='bg-secondary w-1/4 rounded-md flex flex-col justify-between '>
            <div className='flex flex-col'>
              <div className='m-2'>
                     Make it
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
