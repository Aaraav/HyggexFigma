import React from 'react'

export default function Hyggex() {
  return (
    <div>
      <ul className='flex mt-10 w-21 ml-14'>
        <li><img className='w-5' src='/Vector.png'/></li>
        <li className='hover:text-customBlue ml-1'>>Flashcard</li>
        <li className='hover:text-customBlue ml-1'> >Mathematics</li>
      <li className='text-l text-customBlue font-bold ml-1 text-nowrap'>>Relations and functions</li>
      </ul>
        
    <p className='text-left mt-14 ml-14 font-extrabold  text-customBlue font-monsterrate text-2xl text-nowrap'>Relations and Functions (Mathematics)</p>
<div className='flex justify-center '>
    <ul className='flex align-middle  mt-16 justify-center'>
      <li className='pl-10 text-xl pb-2 text-next hover:customBlue hover:translate-x-3 hover:underline hover:text-customBlue'  style={{
              transition: 'transform 0.5s ease',
              
            }}
      
      >Study</li>
       <li className='pl-10 text-xl pb-2 text-next hover:customBlue hover:underline hover:translate-x-3 hover:text-customBlue' style={{
              transition: 'transform 0.5s ease',
              
            }}>Quiz</li>
    <li className='pl-10 text-xl pb-2 text-next hover:customBlue hover:underline hover:translate-x-3 hover:text-customBlue' style={{
              transition: 'transform 0.5s ease',
              
            }}>Test</li>
    <li className='pl-10 text-xl pb-2 text-next hover:customBlue hover:underline hover:translate-x-3 hover:text-customBlue' style={{
              transition: 'transform 0.5s ease',
              
            }}>Game</li>
    <li className='pl-10 text-xl pb-2 text-next hover:customBlue hover:underline hover:translate-x-3 hover:text-customBlue' style={{
              transition: 'transform 0.5s ease',
              
            }}>Others</li>
   
    </ul>
    </div>

      
    </div>
  )
}
