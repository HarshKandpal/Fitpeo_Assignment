import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';

function NetProfit() {
  const [percentage,setPercentage]=useState(67)

  return (
    <div className='bg-secondary w-full md:w-1/4 rounded-md p-3 flex flex-row'>
      <div className='font-semibold w-1/2 flex flex-col justify-around'>
        <p>NetProfit</p>
        <div>
        <p className='text-2xl font-bold mb-2'>$6759.25</p>
        <p className='text-xs font-semibold flex items-center text-green-500'>
          <FaPlay className='-rotate-90 mr-1' />3%
        </p>
        </div>
      </div>
      <div className='w-1/2 flex flex-col items-center justify-center'>
        <div className='w-20 h-20 mb-2'>
          <CircularProgressbar
            value={percentage}
            className="text-bold"
            text={`${percentage}%`}
            strokeWidth={12}
            styles={buildStyles({
              textColor: "white",
              pathColor: "#7297FE",
              trailColor: "white",
              textSize: "28px"
            })}
          />
        </div>
        <div className='text-xs text-gray-400 flex items-start'>
          *Values are rounded off.
        </div>
      </div>
    </div>
  );
}

export default NetProfit;
