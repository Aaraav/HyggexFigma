import React, { useEffect, useState } from 'react';

export default function Faq() {
    const [di,setdi]=useState(null);
    const [di2,setdi2]=useState(null);

    const [di3,setdi3]=useState(null);


    useEffect(()=>{

        const log=document.getElementById("log");
        const log1=document.getElementById("log1");

        const log2=document.getElementById("log2");


        const display=()=>{
           setdi((prev) => !prev);
        };
        const display2=()=>{
            setdi2((prev) => !prev);
         };
         const display3=()=>{
            setdi3((prev) => !prev);
         };

        log.addEventListener('click',display);
        log1.addEventListener('click',display2);
        log2.addEventListener('click',display3);
        return ()=>{

            log.removeEventListener('click', display);
            log1.removeEventListener('click', display2);
            log2.removeEventListener('click', display3);


        };
    },[])
  return (
    <div>
    
      <div className='flex w-712 h-12 border justify-between border-next2 rounded-xl ml-10 mt-10 mb-auto'>
        <p className='text-xl mt-3.5 ml-4 font-semibold'>
        Can education flashcards be used for all age groups?
        </p>
        <img  id='log' className='w-4 h-4 mt-5 mr-5' src='/Vector (7).png'/>
      </div>
      {
        di && (
      <div className='w-712 h-16 mt-0 ml-10 bg-slate-300 text-center'><p className='pt-7'>Solution</p></div>
     ) }

<div className='flex w-712 h-12 border justify-between border-next2 rounded-xl ml-10 mt-10 mb-auto'>
        <p className='text-xl mt-3.5 ml-4 font-semibold'>
        How do Education flashcard works?
        </p>
        <img  id='log1' className='w-4 h-4 mt-5 mr-5' src='/Vector (7).png'/>
      </div>
      {
        di2 && (
      <div className='w-712 h-16 mt-0 ml-10 bg-slate-300 text-center'><p className='pt-7'>Solution</p></div>
     ) }

<div className='flex w-712 h-12 border-spacing-4 justify-between border border-next2 rounded-xl ml-10 mt-10 mb-auto'>
        <p className='text-xl mt-3.5 ml-4 font-semibold'>
        Can education flashcards be used for Test preperation?
        </p>
        <img  id='log2' className='w-4 h-4 mt-5 mr-5' src='/Vector (7).png'/>
      </div>
      {
        di3 && (
      <div className='w-712 h-16 mt-0 ml-10 bg-slate-300 text-center mb-44'><p className='pt-7'>Solution</p></div>
     ) }
    </div>
  );
}
