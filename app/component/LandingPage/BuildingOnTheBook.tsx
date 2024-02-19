import React from 'react';
import Image from 'next/image';
import Wrapper from '../shared/ComponentWrapper/Wrapper';

const BuildingOnTheBook = () => {
  return (
    <div className="w-full h-[256px] bg-[url('/assets/rectangle.png')] relative">
      <Wrapper>
        <div className='w-full bg-[#121616] absolute left-[20%] -bottom-[45%] max-w-[900px] flex justify-between items-center px-7 py-5 rounded-lg'>
          <div className='flex flex-col gap-2'>
            <p className='text-[18px] font-normal textColor'>CONTACT US</p>
            <h2 className='text-[38px] text-white-1 font-semibold'>
              Building on the Book?
            </h2>
            <div className='flex justify-center items-center gap-24'>
              <p className='text-white-1/40 font-medium text-[20px]'>
                info@openbook.com
              </p>
              <div className='w-[250px] h-[86px] relative'>
                <Image
                  src='/assets/sendArrow.png'
                  fill
                  alt=''
                  className='object-fill'
                />
              </div>
            </div>
          </div>
          <div className='w-[210px] h-[210px] relative'>
            <Image
              src='/assets/solonaShape.png'
              fill
              alt=''
              className='object-fill'
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BuildingOnTheBook;
