import React from 'react';
import { FeedbackData } from '../Data/FeedbackData';
import { FaUser,FaStar  } from 'react-icons/fa';

function Feedback() {
  return (
    <div className='bg-secondary w-full md:w-1/4 rounded-md p-3 h-72 flex flex-col'>
      <div className='font-semibold text-white mb-4'>
        Customer's Feedback
      </div>
      <div className='feedback-scroll flex flex-col space-y-4 overflow-x-auto'>
        {FeedbackData && FeedbackData.map((review) => (
          <div key={review.id} className="flex flex-col">
            <div className='flex items-center mb-2'>
              <button className='bg-gray-500 rounded-full h-8 w-8 flex items-center justify-center'>
                <FaUser className='text-white h-4 w-4' />
              </button>
              <span className='text-white ml-2'>{review.name}</span>
            </div>
            <div className='mb-2 flex'>
              {
                [...Array(5)].map((_,i)=>(
                  <FaStar  key={i} className={`mr-1 ${i<review.star?'text-yellow-500':'text-white'}`}/>
                ))
                 
              }
            </div>
            <div>
              <p className='text-xs text-white opacity-70'>{review.comments}</p>
            </div>
            <div className='border border-solid border-gray-600 mt-2'></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
