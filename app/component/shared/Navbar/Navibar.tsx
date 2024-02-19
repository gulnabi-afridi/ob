import React from 'react';
import Wrapper from '../ComponentWrapper/Wrapper';
import * as Icons from '../../../svg/Icons';
import Link from 'next/link';

const Navibar = () => {
  return (
    <div className='w-full bg-transparent h-[60px] sm:h-[90px]'>
      <Wrapper style='h-full'>
        <div className='w-full h-full flex justify-between items-center'>
          <Icons.logo className='w-[147px] h-[28px] sm:h-[32px]' />
          {/* links ---> */}
          <div className='hidden md:flex justify-center items-center gap-10'>
            {links.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.path}
                  className='text-white-1 font-normal text-[18px] relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-white-1 hover:after:w-full after:duration-200'
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          {/* trade now btn -----> */}
          <button className='text-white-1 px-8 md:block hidden py-3 bg-purple-1 rounded-lg text-[16px] font-medium hover:opacity-80 active:translate-y-[1px]'>
            Trade Now
          </button>
          {/* navibar for small screen -----> */}
          <div className=''>
            <Icons.hamburger className='w-[28px] sm:w-[34px] h-[28px] sm:h-[34px]' />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const links = [
  {
    name: 'Ecosystem',
    path: '#',
  },
  {
    name: 'Docs',
    path: '#',
  },
];

export default Navibar;
