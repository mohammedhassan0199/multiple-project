import React, { useEffect, useState } from 'react'
import sun from "./assets/sun.jpg";
import moon from "./assets/moon.jpg";
import cloud from "./assets/cloud.avif";
import moorning from "./assets/moorning.jpg";



function Greeting() {

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

    let hour = time.getHours();
     
    let msg;

    let image;

    if(hour >= 5 && hour < 12) {
        msg = "GOOD MORNING";
        image = moorning;
    }
    else if(hour >= 12 && hour < 16){
        msg = "GOOD AFTERNOON";
        image = sun;
    }
    else if(hour >= 16 && hour < 22){
        msg = "GOOD EVENING";
        image = cloud;
    }
    else if(hour >= 22){
        msg = "GOOD NIGHT";
        image = moon;
    }
    else if(hour < 5){
        msg = "GOOD NIGHT";
        image = moon;

    }
    

  return (
    <>

        <div className='w-96 bg-[#581845] flex justify-center items-center flex-col text-white text-center mt-12 ml-[40%] py-10 px-6'>

            <h2 className='text-2xl font-semibold'>Greeting Website</h2>
            <h1 className='text-5xl font-bold my-6'>{time.toLocaleTimeString()}</h1>
            <h2 className='text-3xl mb-10'>{msg}</h2>
            <img src={image} alt="" />
        </div>

    </>
  )
}

export default Greeting