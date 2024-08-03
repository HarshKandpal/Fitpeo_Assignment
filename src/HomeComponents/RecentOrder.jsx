import React from 'react';
import { OrderData } from '../Data/OrderData';
import { FaUser } from 'react-icons/fa';

function RecentOrder() {
  return (
    <div className='bg-secondary w-full md:w-3/4 rounded-md p-3 h-72 flex flex-col'>
      <div className='font-semibold text-white mb-4'>
        Recent Orders
      </div>
      <div className='feedback-scroll overflow-x-auto'>
        <table className='w-full text-white'>
          <thead>
            <tr className='border-b border-gray-600'>
              <th className='text-sm text-left p-2'>Customer</th>
              <th className='text-sm text-left p-2'>Order No</th>
              <th className='text-sm text-left p-2'>Amount</th>
              <th className='text-sm text-left p-2'>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              OrderData && OrderData.map((data) => (
                <tr key={data.orderno} className='border-b border-gray-600'>
                  <td className='flex items-center p-2'>
                    <button className='bg-gray-500 rounded-full h-8 w-8 flex items-center justify-center'>
                      <FaUser className='text-white h-4 w-4' />
                    </button>
                    <span className=' text-sm pl-2'>{data.customer}</span>
                  </td>
                  <td className='text-sm p-2'>{data.orderno}</td>
                  <td className='text-sm p-2'>{"$" + data.amount}</td>
                  <td className='p-2'>
                    <button className={`rounded-s-full rounded-r-full h-6 w-20 text-sm p-1 opacity-60 hover:opacity-90 ${data.status === 'Delivered' ? 'bg-green-400 text-green-800' : 'bg-red-400 text-red-800'}`}>
                      {data.status}
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrder;
