import React, { useEffect, useState } from 'react';

export default function Footer() {
  const [dis, setDis] = useState(null);

  useEffect(() => {
    const x = document.getElementById("x");

    const handle = () => {
      setDis((prevDis) => !prevDis);
    };

    x.addEventListener('click', handle);

    return () => {
      x.removeEventListener('click', handle);
    };
  }, []); 

  return (
    <div>
      <div className='mt-96 flex justify-between'>
        <img className='ml-10' src='/Frame 41.png' alt="Image 1" />
        <div className='flex ml-96 ' >
        <img id='x' className='w-12 h-10 mr-4 mt-10' src='/Vector (8).png' alt="Image 2" />
        <h2 className='text-3xl mt-10 mr-8 text-nowrap font-bold bg-clip-text text-transparent bg-gradient-to-b from-next3 to-next4'>Create Flashcard</h2>
        </div>
      </div>
      {dis && (
        <input type='textarea' className='bg-customBlue w-96 h-60 absolute ml-full rounded-lg text-xl font-bold text-nowrap text-white pt-10 overflow-hidden'/>
      )}
  <h1 className='text-6xl bg-clip-text text-transparent bg-gradient-to-b from-next3 to-next4 font-bold mt-36 ml-12 text-left text-blue-gradient'>
        FAQ
      </h1>
      
    </div>
  );
}
