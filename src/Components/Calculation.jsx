import React, { useEffect, useState } from 'react';

export default function Calculation(props) {
  const [currentDiv, setCurrentDiv] = useState(1);

  useEffect(() => {
    const btn2 = document.getElementById('btn2');
    const btn1 = document.getElementById('btn1');
    const btn0 = document.getElementById('btn0');

    const logo = document.getElementById('logo');
    const col = document.querySelector("#col");

    const handleBtn2Click = () => {
      if (currentDiv < 4) {
        setCurrentDiv(currentDiv + 1);
      } else {
        setCurrentDiv(1);
      }
    };

    const handleBtn1Click = () => {
      if (currentDiv < 4 && currentDiv > 1) {
        setCurrentDiv(currentDiv - 1);
      } else {
        setCurrentDiv(1);
      }
    };
    const handleBtn0Click = () => {
    
        setCurrentDiv(1);
      
    };

    const logodisplay = () => {
      const currentDivElement = document.getElementById(`div${currentDiv}`);
      if (currentDivElement) {
        currentDivElement.style.width = '1000px';
        currentDivElement.style.height = '1000px';
        currentDivElement.style.position = 'absolute';
        currentDivElement.style.zIndex = '30';
      }
    }

   

    btn2.addEventListener('click', handleBtn2Click);
    btn1.addEventListener('click', handleBtn1Click);
    btn0.addEventListener('click', handleBtn0Click);

    logo.addEventListener('click', logodisplay);

    return () => {
      btn2.removeEventListener('click', handleBtn2Click);
      btn1.removeEventListener('click', handleBtn1Click);
      btn0.removeEventListener('click', handleBtn0Click);

      logo.removeEventListener('click', logodisplay);
    };
  }, [currentDiv]);

  return (
    <>
      <div className="flex items-center justify-center h-96 absolute ml-100 z-10 w-96 overflow-hidden ">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={`div${index}`}
            id={`div${index}`}
            className={`w-96 mt-10 mb-10 h-60 overflow-auto bg-gradient-to-b from-next3 to-next4 absolute rounded-2xl mr-0`}
            style={{
              transition: 'transform 0.5s ease',
              transform: `translateX(${(index - currentDiv) * 100}%)`,
            }}
          >
            <div className='flex items-center justify-between w-96 mt-10'>
              <img id='col' className='w-5 ml-10' src='/Vector (1).png' />
              <img className='w-5 mr-10' src='/Vector (2).png' />
            </div>
            <h3 className='text-white font-bold text-2xl mt-10'>{props.value}</h3>
            <p></p>
          </div>
        ))}
       </div>

      <div>
        <ul className='flex justify-center mt-80 ml-max absolute z-40  '>
          <li id='btn0' className='ml-10 w-5'><img src='/Vector (3).png' /></li>
          <li id='btn1' className='ml-10 w-8'><img src='/Vector (4).png' /></li>
          <li className='ml-10 text-2xl'>0{currentDiv}/04</li>
          <li id='btn2' className='ml-10 w-8'><img src='/Vector (5).png' /></li>
          <li id='logo' className='ml-10 w-5'><img src='/Vector (6).png' /></li>
        </ul>
      </div>
    </>
  );
}
      
