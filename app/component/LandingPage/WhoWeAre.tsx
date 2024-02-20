import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import * as Icons from '../../svg/Icons';
import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <div className='w-full pt-10 pb-24'>
      <Wrapper>
        <div className='w-full flex flex-col gap-4'>
          <p className='text-[18px] font-normal textColor'>WHO WE ARE</p>
          {/* 1st and 2nd col ---> */}
          <div className='w-full grid grid-cols-1 lg:grid-cols-[1.3fr,2fr] gap-8'>
            {/* ist col ---> */}
            <div className='w-full h-full  justify-center flex items-center'>
              <div className='w-full max-w-[500px] px-6 py-6 relative col1 h-full flex flex-col justify-between lg:items-start items-center'>
                {/* image */}
                <div className='w-full flex flex-col gap-2'>
                  <div className='block lg:absolute -right-0 top-0'>
                    <div className='w-[350px] lg:w-[300px] xl:w-[400px] h-[270px] lg:h-[200px] xl:h-[280px] relative'>
                      <Image
                        src='/assets/col1.png'
                        className='object-fill'
                        fill
                        alt=''
                      />
                    </div>
                  </div>
                  <h2 className='text-[32px] text-center lg:text-left xl:text-[48px] mt-0 lg:mt-[6rem] xl:mt-[8rem] tracking-[3px] text-white-1 font-terminaExtraDemi'>
                    A DEX for <br />{' '}
                    <span className='textColor'> The People</span>
                  </h2>
                  <p className='text-white-1/80 lg:text-left text-center text-[16px] font-normal'>
                    An open source and permissionless public utility, built and
                    funded by the community it serves.
                  </p>
                </div>
                {/* learn more btn ---->  */}
                <button className='flex hover:opacity-80 lg:mt-0 mt-8 justify-center items-center gap-2'>
                  <p className='text-white-1 text-[16px] font-normal'>
                    Learn More
                  </p>
                  <Icons.rightArrow className='w-[24px] h-[24px]' />
                </button>
              </div>
            </div>
            {/* 2nd col ---> */}
            <div className='w-full h-full px-6 py-6 col2 relative justify-between flex flex-col items-start'>
              <div className='flex flex-col w-full gap-2'>
                <h2 className='text-[32px] xl:text-[48px] mt-[6rem] xl:mt-[8rem] tracking-[3px] text-white-1 font-terminaExtraDemi'>
                  Unparalleled <br />
                  <span className='textColor2'>Composability</span>
                </h2>
                <p className='text-white-1/80 w-full max-w-[400px] text-[16px] font-normal'>
                  Integrate any project, build your own UI with customized fees
                  and features or fork the codebase to explore new use cases.
                </p>
              </div>
              {/* learn more btn ---->  */}
              <button className='flex hover:opacity-80 justify-center items-center gap-2 mt-14 xl:mt-8'>
                <p className='text-white-1 text-[16px] font-normal'>
                  Learn More
                </p>
                <Icons.rightArrow className='w-[24px] h-[24px]' />
              </button>
              {/* image ---> */}
              <div className='absolute -bottom-1 right-0 xl:-right-1'>
                <div className='w-[470px] xl:w-[520px] h-[380px] xl:h-[450px] relative'>
                  <Image
                    src='/assets/col2.png'
                    fill
                    alt=''
                    className='object-fill'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 3rd + 4rd + 5th col -----> */}
          <div className='w-full grid grid-cols-[0.6fr,1fr,1fr] gap-8 mt-4'>
            {/* 3rd col ---->  */}
            <div className='w-full col3 h-full flex items-start justify-between flex-col px-6 py-6'>
              <div className='w-full flex flex-col gap-4'>
                <h2 className='text-[40px] tracking-[3px] mt-10 leading-[40px] text-white-1 font-terminaExtraDemi'>
                  <span className='textColor'> Zero</span> Protocol Fees
                </h2>
                <p className='text-white-1/80 text-[16px] font-normal'>
                  Free to build on. Free to trade on. Free from rent-seeking
                  behavior and venture capital influences.
                </p>
              </div>
              {/* learn more btn ---->  */}
              <div className='w-full flex justify-end'>
                <button className='flex hover:opacity-80 justify-center items-center gap-2'>
                  <p className='text-white-1 text-[16px] font-normal'>
                    Learn More
                  </p>
                  <Icons.rightArrow className='w-[24px] h-[24px]' />
                </button>
              </div>
            </div>
            {/* 4rth col --->  */}
            <div className='w-full col4 h-full flex justify-between items-start flex-col px-6 py-6'>
              <div className='w-full absolute -right-0 top-0'>
                <div className='w-full max-w-[400px] h-[300px] relative'>
                  <Image
                    src='/assets/col4.png'
                    className='object-fill'
                    fill
                    alt=''
                  />
                </div>
              </div>
              <div className='w-full flex gap-4 flex-col'>
                <h2 className='text-[40px] mt-[12rem] tracking-[3px] leading-[45px] text-white-1 font-terminaExtraDemi'>
                  Infinite <br />{' '}
                  <span className='textColor'>Customization </span>
                </h2>
                <p className='text-white-1/80 text-[16px] font-normal'>
                  Create public or whitelisted markets, set your own fees, and
                  trade any SPL token.
                </p>
              </div>
              {/* learn more btn ---->  */}
              <div className='w-full flex justify-end'>
                <button className='flex hover:opacity-80 justify-center items-center gap-2'>
                  <p className='text-white-1 text-[16px] font-normal'>
                    Learn More
                  </p>
                  <Icons.rightArrow className='w-[24px] h-[24px]' />
                </button>
              </div>
            </div>
            {/* 5th col --->  */}
            <div className='w-full h-full col5 flex justify-between items-start flex-col px-6 py-6'>
              <div className='w-full flex flex-col gap-4'>
                <h2 className='text-[40px] mt-[9rem] tracking-[3px] leading-[45px] text-white-1 font-terminaExtraDemi'>
                  Permisonless <br /> Trustless{' '}
                  <span className='textColor2'> Transparent</span>
                </h2>
                <p className='text-white-1/80 text-[16px] font-normal'>
                  100% on-chain and noncustodial orderbook.
                </p>
              </div>

              {/* learn more btn ---->  */}
              <div className='w-full flex justify-end mt-28'>
                <button className='flex hover:opacity-80 justify-center items-center gap-2'>
                  <p className='text-white-1 text-[16px] font-normal'>
                    Learn More
                  </p>
                  <Icons.rightArrow className='w-[24px] h-[24px]' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default WhoWeAre;
