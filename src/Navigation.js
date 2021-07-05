import React from 'react';
import logo from './YouTube-Icon-Full-Color-Logo.wine.svg';

const Navigation = () =>{
  return(
    <div className='m-auto my-5 flex'>
      <img className='h-20 w-auto' src={logo} alt='logo'></img>
      <p className='text-3xl text-center pt-5'> Youtube Search App </p>
    </div>
    
  );
}

export default Navigation;