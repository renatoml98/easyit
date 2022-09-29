import React from 'react';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import styles from '../style';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain'/>
        <p className={`${styles.paragraph} mt-4 max-w-[400px]`}>Leading innovative solutions that simplify work management operations.</p>
      </div>

      <div className='mt-10 flex-[1.5] w-full'>
        {footerLinks.map((footerLink, index) => (
          <div key={index} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {footerLink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((link, index) => ( 
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.lenght - 1 ? 'mb-4' : 'mb-0'}`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='w-full pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p className='font-poppins font-normal text-[18px] leading-[27px] text-white'>
        2022 EasyIT. All Rights Reserved.
      </p>
    </div>
  </section>
)

export default Footer