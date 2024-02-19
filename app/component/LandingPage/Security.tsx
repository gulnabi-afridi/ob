import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import * as Icons from '../../svg/Icons';

const Security = () => {
  return (
    <div className='w-full mt-10 py-16 secBg relative overflow-hidden'>
      <Wrapper>
        <div className='w-full flex flex-col gap-2 justify-center items-center'>
          <p className='text-[18px] font-normal textColor'>SECURITY</p>
          <h1 className='text-[28px] text-white-1 font-semibold'>
            Audited and Verified by
          </h1>
          <div className='flex justify-center items-center gap-2 mt-4'>
            <Icons.logo2 className='w-[85px] h-[85px]' />
            <Icons.otterSec className='w-[312px] h-[55px]' />
          </div>
          {/* view full report btn ----->  */}
          <button className='px-[20px] py-[10px] mt-10 active:translate-y-[1px] hover:opacity-80 rounded-lg bg-purple-1 text-white-1 text-[16px] font-medium'>
            View Full Report
          </button>
        </div>
      </Wrapper>
      {/* shapes ----->  */}
      <Icons.shade2 className='w-[690px] h-[600px] absolute -left-[15%] -top-[30%]' />
      <Icons.shade2 className='w-[650px] h-[600px] absolute -right-[10%] -top-[30%]' />
    </div>
  );
};

export default Security;
