import React from 'react';
import { BsBag } from 'react-icons/bs';
import '../App.css';


const div = () => {
  return (
    <>
      <header className='App-header'>
        <p></p>
        <img className="center-item App-logo" src="logo.png" alt="logo" />
        <nav className=''>
          <a
            href='https://buy.stripe.com/test_eVa3d253o51a5Ww144'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsBag className='text-2xl' />
          </a>
        </nav>
      </header>
    </>
  );
};

export default div;
