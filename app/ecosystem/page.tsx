'use client';

import React from 'react';
import Wrapper from '../component/shared/ComponentWrapper/Wrapper';
import Image from 'next/image';
import * as Icons from '../svg/Icons';
import { Fade, Slide } from 'react-awesome-reveal';
import Link from 'next/link';

const page = () => {
  return (
    <div className='w-full min-h-[calc(100vh-60px)] sm:min-h-[calc(100vh-90px)] relative flex justify-center md:justify-center items-center md:items-center'>
      <Wrapper>
        <div className='w-full h-full flex flex-col gap-10 sm:gap-16 2xl:gap-[6rem] 3xl:gap-[11rem]'>
          <Fade duration={800} delay={100}>
            <div className='flex flex-col gap-0 justify-center items-center w-full'>
              <p className='text-[12px] sm:text-[18px] 3xl:text-[48px] 2xl:text-[28px] lg:text-left text-center font-normal textColor'>
                ECOSYSTEM
              </p>
              <h1 className='text-[30px] sm:text-[32px] md:text-[48px] 3xl:text-[120px] 2xl:text-[80px] text-white-1 font-terminaheavy'>
                Our Community
              </h1>
            </div>
          </Fade>
          <div className='w-full grid md:gap-0 gap-8 sm:gap-16 2xl:gap-[2rem] 3xl:gap-[12rem] grid-cols-1 md:grid-cols-2 '>
            <Slide
              direction='left'
              duration={800}
              delay={200}
              className='w-full z-30'
            >
              {/* 1st col */}
              <div className='w-full grid grid-cols-1 h-full gap-8 sm:gap-20 3xl:gap-[3rem] justify-center items-center'>
                {/* trade link --->  */}
                <Link
                  href='#'
                  className='w-full cursor-pointer hover:opacity-60 flex flex-col justify-center items-center gap-3'
                >
                  <p className='text-[12px] sm:text-[18px] 2xl:text-[28px] 3xl:text-[48px] lg:text-left text-center font-normal textColor'>
                    TRADE
                  </p>
                  <div className='w-[160px] sm:w-[250px] 2xl:w-[400px] 3xl:w-[650px] 2xl:h-[100px] 3xl:h-[280px] h-[25px] sm:h-[44px] relative'>
                    <Image
                      src='/assets/prism.svg'
                      fill
                      alt=''
                      className='object-fill'
                    />
                  </div>
                </Link>
                {/* swap link --->  */}
                <Link
                  href='#'
                  className='w-full hover:opacity-60 flex flex-col justify-center items-center gap-0'
                >
                  <p className='text-[12px] sm:text-[18px] 2xl:text-[28px] 3xl:text-[48px] lg:text-left text-center font-normal textColor'>
                    SWAP
                  </p>
                  <Icons.jupiter className='w-[160px] sm:w-[256px] 2xl:w-[450px] 3xl:w-[700px] h-[50px] 2xl:h-[150px] 3xl:h-[320px] sm:h-[78px]' />
                </Link>
              </div>
            </Slide>
            <Slide
              direction='right'
              duration={800}
              delay={200}
              className='z-30'
            >
              {/* 2st col */}
              <div className='w-full grid h-full grid-cols-1 gap-8 sm:gap-20 3xl:gap-[3rem] justify-center items-center'>
                {/* arcana link --->  */}
                <Link
                  href='#'
                  className='w-full hover:opacity-70 flex flex-col justify-center items-center gap-3'
                >
                  <p className='text-[12px] sm:text-[18px] 2xl:text-[28px] 3xl:text-[48px] lg:text-left text-center font-normal textColor'>
                    ANALYTICS
                  </p>
                  <div className='w-[180px] sm:w-[300px] 2xl:w-[550px] 3xl:w-[800px] h-[45px] 2xl:h-[120px] 3xl:h-[300px] sm:h-[80px] relative'>
                    <Image
                      src='/assets/arcana.svg'
                      fill
                      alt=''
                      className='object-fill'
                    />
                  </div>
                </Link>
                {/* grapple link -->  */}
                <Link
                  href='#'
                  className='w-full hover:opacity-70 flex flex-col justify-center items-center gap-0'
                >
                  <p className='text-[12px] 2xl:text-[28px] 3xl:text-[48px] sm:text-[18px] lg:text-left text-center font-normal textColor'>
                    CREATE
                  </p>
                  <Icons.grapple className='w-[200px] sm:w-[306px] 2xl:w-[480px] 3xl:w-[700px] h-[50px] 2xl:h-[180px] 3xl:h-[300px] sm:h-[88px]' />
                </Link>
              </div>
            </Slide>
          </div>
        </div>
      </Wrapper>
      {/* bg shape ---->  */}
      <div className="w-full h-full bg-[url('/assets/looper.png')] bg-no-repeat bg-cover absolute top-0 left-0"></div>
    </div>
  );
};

export default page;
