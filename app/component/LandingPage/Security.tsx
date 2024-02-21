import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import * as Icons from '../../svg/Icons';

const Security = () => {
  return (
    <div className='w-full mt-10 py-10 sm:py-16 secBg relative overflow-hidden'>
      <Wrapper>
        <div className='w-full flex flex-col gap-2 justify-center items-center'>
          <p className='text-[12px] sm:text-[18px] font-normal textColor'>
            SECURITY
          </p>
          <h1 className='text-[20px] sm:text-[28px] text-white-1 font-semibold'>
            Audited and Verified by
          </h1>
          <div className='flex justify-center items-center gap-2 mt-4'>
            <Icons.logo2 className='w-[28px] sm:w-[85px] h-[28px] sm:h-[85px]' />
            <Icons.otterSec className='w-[90px] sm:w-[313px] h-[17px] sm:h-[57px]' />
          </div>
          {/* view full report btn ----->  */}
          <button className='px-[20px] py-[10px] mt-6 sm:mt-10 active:translate-y-[1px] hover:opacity-80 rounded-lg bg-purple-1 text-white-1 text-[14px] sm:text-[16px] font-medium'>
            View Full Report
          </button>
        </div>
      </Wrapper>
      {/* shapes ----->  */}
      <Icons.shade2 className=' w-[400px] md:w-[690px] h-[350px] md:h-[600px] hidden sm:absolute -left-[15%] -top-[30%]' />
      <Icons.shade2 className='w-[400px] md:w-[650px] h-[500px] md:h-[600px] hidden sm:absolute -right-[10%] -top-[30%]' />
    </div>
  );
};

export default Security;
