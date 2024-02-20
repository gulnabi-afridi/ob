import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import Image from 'next/image';

const Opos = () => {
  return (
    <div className='w-full py-10 sm:mt-0 -mt-[8rem] sm:py-24 lg:py-36 relative'>
      <Wrapper>
        <div className='w-full grid lg:gap-4 grid-cols-1 gap-10 lg:grid-cols-2 justify-center items-center'>
          {/* left por ----> */}
          <div className='w-full lg:order-1 order-2 flex justify-center items-center'>
            <div className='w-full justify-center items-center max-w-[550px] flex flex-col gap-6'>
              <div className='flex sm:gap-0 gap-4  flex-col w-full items-center lg:items-start gap-0'>
                <p className='text-[14px] sm:text-[18px] font-normal textColor'>
                  OPOS
                </p>
                <h2 className='text-[20px] csm:text-[38px] lg:text-left text-center font-terminaExtraDemi text-white-1 font-semibold leading-[30px] csm:leading-[58px]'>
                  The Capital Efficiency of a CLOB.
                </h2>
                <h2 className='text-[20px] csm:text-[38px]lg:text-left text-center  font-terminaExtraDemi text-white-1 font-semibold leading-[30px] csm:leading-[58px]'>
                  The Speed of Solana.
                </h2>
              </div>
              <p className='text-white-1/80 lg:text-left text-center text-[16px] sm:text-[18px] font-normal leading-[28px]'>
                The OpenBook central limit orderbook links many of the largest
                protocols in Solana DeFi, providing a unified liquidity layer
                that matches buyers and sellers across the ecosystem, enabling
                fully on-chain price discovery at the speed of light.
              </p>
              {/* buttons ---->  */}
              <div className='w-full flex sm:justify-start justify-center items-center gap-4 sm:gap-6'>
                <button className='px-[20px] sm:px-[24px] hover:opacity-80 py-[10px] sm:py-[12px] bg-purple-1 text-[16px] sm:text-[18px] text-white-1 rounded-lg'>
                  Trade Now
                </button>
                <button className='px-[20px] sm:px-[24px] hover:opacity-80 border-[1px] border-[#9945FF] py-[10px] sm:py-[12px] bg-transparent text-[16px] sm:text-[18px] text-white-1 rounded-lg'>
                  Build With Us
                </button>
              </div>
            </div>
          </div>
          {/* right por ---->  */}
          <div className='sm:w-auto w-full flex lg:order-2 order-1 justify-center items-center xl:absolute xl:bottom-[3rem] right-0'>
            <div className='w-full sm:w-[600px] h-[300px] sm:h-[450px] xl:h-[600px] relative'>
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
