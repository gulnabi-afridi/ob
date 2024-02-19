import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import Image from 'next/image';

const Opos = () => {
  return (
    <div className='w-full py-36 relative'>
      <Wrapper>
        <div className='w-full grid grid-cols-2'>
          {/* left por ----> */}
          <div className='w-full max-w-[550px] flex flex-col gap-6'>
            <div className='flex flex-col gap-0'>
              <p className='text-[18px] font-normal textColor'>OPOS</p>
              <h2 className='text-[38px] font-terminaExtraDemi text-white-1 font-semibold leading-[58px]'>
                The Capital Efficiency of a CLOB.
              </h2>
              <h2 className='text-[38px] font-terminaExtraDemi text-white-1 font-semibold leading-[58px]'>
                The Speed of Solana.
              </h2>
            </div>
            <p className='text-white-1/80 text-[18px] font-normal leading-[28px]'>
              The OpenBook central limit orderbook links many of the largest
              protocols in Solana DeFi, providing a unified liquidity layer that
              matches buyers and sellers across the ecosystem, enabling fully
              on-chain price discovery at the speed of light.
            </p>
            {/* buttons ---->  */}
            <div className='flex justify-start items-center gap-6'>
              <button className='px-[24px] hover:opacity-80  py-[12px] bg-purple-1 text-[18px] text-white-1 rounded-lg'>
                Trade Now
              </button>
              <button className='px-[24px] hover:opacity-80 border-[1px] border-[#9945FF] py-[12px] bg-transparent text-[18px] text-white-1 rounded-lg'>
                Build With Us
              </button>
            </div>
          </div>
          {/* right por ---->  */}
          <div className='absolute bottom-[3rem] right-0'>
            <div className='w-[600px] h-[600px] relative'>
              <Image
                src='/assets/lcd.svg'
                fill
                alt=''
                className='object-fill'
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Opos;
