import React from 'react';
import Activity from '../HomeComponents/Activity';
import BoxStats from '../HomeComponents/BoxStats';
import Feedback from '../HomeComponents/Feedback';
import Menu from '../HomeComponents/Menu';
import NetProfit from '../HomeComponents/NetProfit';
import RecentOrder from '../HomeComponents/RecentOrder';

function Home() {
  return (
    <div className='flex flex-col text-white px-2 pt-8 gap-y-6'>
      <div className='font-bold text-2xl'>
        Dashboard
      </div>
      <div className='flex flex-col md:flex-row justify-between gap-6 w-full'>
        <BoxStats />
        <NetProfit />
      </div>
      <div className='flex flex-col md:flex-row justify-between gap-6 w-full'>
        <Activity />
        <Menu />
      </div>
      <div className='flex flex-col md:flex-row justify-between gap-6 w-full'>
        <RecentOrder />
        <Feedback />
      </div>
    </div>
  );
}

export default Home;
