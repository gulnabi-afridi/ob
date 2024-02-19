import React from 'react';
import Wrapper from '../ComponentWrapper/Wrapper';
import Image from 'next/image';
import * as Icons from '../../../svg/Icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full ftBg py-10 mt-[11rem]'>
      <Wrapper>
        <div className='w-full flex justify-center items-center flex-col gap-10'>
          {/* top ---> */}
          <div className='flex flex-col justify-center items-center gap-2'>
            <Icons.logo className='w-[147px] h-[32px]' />
            <p className='text-[16px] font-normal text-white-1/60'>
              A Solana DEX built by Chads
            </p>
          </div>
          {/* bottom sec ----> */}
          <div className='flex flex-col justify-center items-center gap-2'>
            {/* social icons ---> */}
            <div className='flex gap-6 justify-center items-center'>
              {socialIcons.map((item, index) => {
                return <Link href={item.path}>{item.name}</Link>;
              })}
            </div>
            <p className='text-[16px] font-normal text-white-1/60'>
              © 2024 OpenBook. All rights reserved.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const socialIcons = [
  {
    path: '#',
    name: (
      <Icons.twiter className='w-[32px] h-[32px] hover:scale-105 duration-300' />
    ),
  },
  {
    path: '#',
    name: (
      <Icons.discord className='w-[32px] h-[32px] hover:scale-105 duration-300' />
    ),
  },
  {
    path: '#',
    name: (
      <Icons.githHub className='w-[32px] h-[32px] hover:scale-105 duration-300' />
    ),
  },
  {
    path: '#',
    name: (
      <Icons.gitBook className='w-[32px] h-[32px] hover:scale-105 duration-300' />
    ),
  },
];

export default Footer;
