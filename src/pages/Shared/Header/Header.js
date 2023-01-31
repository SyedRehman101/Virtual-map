import React from 'react';
import './header.css'
import Ethereum from '../../../assets/svg/ethereum.svg'

const Header = () => {
  return (
    <div className='w-full md:h-[40px] h-[35px] header-bg md:px-8 px-3 py-1.5'>
      <div className='flex items-center justify-between '>
        <div className='flex items-center md:gap-12 gap-6'>
          <div className='flex items-center gap-2 md:text-sm text-xs text-pure'>
            <div className='w-[20px] h-[20px] bg-pure flex items-center justify-center rounded-full '>
              <img
                src={Ethereum}
                alt="Ethereum icon"
                className='w-[15px] h-[15px]'
              />
            </div>
            <span>$0.00245</span>
          </div>
          <div className='border border-light text-pure rounded-full py-[2px] px-3 md:text-sm text-xs sm:flex hidden'>
            <p>MY Xleaverse : 0.0000=$0.0000</p>
          </div>
        </div>
        <div className='flex items-center sm:gap-6 gap-3'>
          <div className='border border-yellow rounded-full py-0.5 px-3  md:text-sm text-xs flex items-center gap-2 text-light cursor-pointer bg-gray'>
            <img src='https://s1.coincarp.com/logo/1/shibainu.png?style=200' alt="monero" className='w-[15px] h-[15px]' />
            <span>PancakeSwap</span>
          </div>
          <div className='border border-yellow rounded-full py-0.5 px-3  md:text-sm text-xs flex items-center gap-2 text-yellow cursor-pointer bg-gray'>
            FARM
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;