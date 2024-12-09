import React, { useState, useEffect } from 'react';

const Digital = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
    
    <div className='p-6 flex flex-col justify-center items-center'>
         <h1 className='text-3xl'>Digital Clock</h1>
         <h2 className='text-2xl'>{time.toLocaleTimeString()}</h2>
        
        </div>;

    
    </>
  )
}

export default Digital;
