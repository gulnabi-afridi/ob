import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import * as Icons from '../../svg/Icons';

const Hero = () => {
  return (
    <div className='w-full min-h-[calc(100vh-90px)] relative'>
      <Wrapper style='h-full'>
        <div className='w-full flex flex-col gap-5 justify-center items-center h-full'>
          <div className="w-full -mt-10 max-w-[940px] h-[490px] bg-[url('/assets/heroShape.svg')] flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat">
            <p className='text-[#E0C7FF] mt-[5rem] text-[30px] font-semibold'>
              OpenBook
            </p>
            <h1 className='text-[96px] tracking-[4px] leading-[120px] text-center font-bold font-terminaExtraBold text-white-1'>
              A DEX For <br /> The People
            </h1>
          </div>
          {/* statistics -----> */}
          <div className='flex max-w-[600px] py-3 rounded-md w-full justify-center border-[1px] border-[#9945FF] items-center gap-28'>
            <div className='flex justify-center items-center flex-col gap-1'>
              <p className='text-white-1 text-[48px] font-terminaExtraDemi'>
                $9.8M
              </p>
              <p className='text-[18px] font-normal text-white-1/60'>
                24H Volume
              </p>
            </div>
            <div className='flex justify-center items-center flex-col gap-1'>
              <p className='text-white-1 text-[48px] font-terminaExtraDemi'>
                8.9k
              </p>
              <p className='text-[18px] font-normal text-white-1/60'>
                Total Markets
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
      {/* shade 1 ----> */}
      <div className='absolute -bottom-10 left-0'>
        <Icons.shade1 className='w-[319px] h-[416px]' />
      </div>
      {/* shade 2 ----> */}
      <div className='absolute top-0 right-0'>
        <Icons.shade2 className='w-[319px] h-[416px]' />
      </div>
      {/* arrows ---->  */}
      <Icons.arrow1 className='absolute opacity-50 left-[3rem] bottom-[7rem] w-[149px] h-[167px]' />
      <Icons.arrow1 className='absolute opacity-30 left-[40%] bottom-[0rem] w-[123px] h-[139px]' />
      <Icons.arrow1 className='absolute opacity-50 right-[20%] bottom-[30%] w-[70px] h-[80px]' />
      <Icons.arrow1 className='absolute opacity-40 right-[2%] bottom-[2%] w-[107px] h-[120px]' />
    </div>
  );
};

export default Hero;
