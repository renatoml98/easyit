import React from 'react';
import { discount, robot, cuboPequeno } from '../assets';
import styles from '../style';

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col 
    ${styles.paddingY}`}>

      <div id="LeftSide" className={`flex-2  ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-2 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={cuboPequeno} alt="cuboPequeno" className='w-[32px] h-[32px] order-2 ml-2'/>
          <p className={`${styles.paragraph} ml-2 order-1`}>
            <span className='text-white'>30%</span> Discount For {" "}
            <span className='text-white'>1 Mounth</span> Account
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]
          leading-[75px]'>
            Leading <br className="sm:block hidden"/> {" "}
            <span className='text-gradient'>Innovative</span>{" "}
          </h1>
          
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px]
          leading-[75px] w-'>Management Software
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With a modern, friendly-user and well structured software, it's much easier to manage and maintain your company.

        </p>
      </div>

      <div id="RightSide" className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>

      </div>
      </section>
  )


export default Hero