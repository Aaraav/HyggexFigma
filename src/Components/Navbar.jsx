import React from 'react';

export default function Navbar() {
  return (
    <div>
      <div className='flex justify-between'>
        <img className='ml-14 mt-6' src='/Component 40.png' />

        <ul className='flex mr-10 mt-6 ml-80'>
          <li className='pr-5 text-next'>Home</li>
          <li className='pr-5 text-next'>Flashcard</li>
          <li className='pr-5 text-next'>Contact</li>
          <li className='pr-5 text-next'>FAQ</li>
          <button className='pr-5 bg-gradient-to-b from-next3 to-next4 text-white pb-4 pl-5 h-8 text-center border rounded-full hover:text-customBlue hover:bg-gradient-to-b hover:from-next3 hover:to-white'>Login</button>
        </ul>
      </div>
    </div>
  );
}
