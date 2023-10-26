import React from 'react';

import LogoWhite from '../assets/img/logo-white.svg'

const Footer = () => {
  return(
    <div className='bg-primary py-12'>
      <div className='container mx-auto text-white flex justify-between items-center flex-col lg:flex-row gap-y-4'>
        {/* Logo */}
        <a href='/'>
        <img src={LogoWhite} alt="logowhite"/>
        </a>
        Copyright &copy; 2023, All Rights Reserved.
      </div>
    </div>
  )
};

export default Footer;
