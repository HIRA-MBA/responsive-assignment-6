import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button';

const Landingpage = () => {
  return (
    <div className="flex flex-col sm:flex-row">
    <div className="w-full sm:w-1/2">
      <div className="w-[428px] gap-4 mt-2 sm:w-auto sm:mr-8 flex flex-col items-center">
        <h1 className="font-bold text-[40px] text-center w-[380px] flex items-center sm:text-4xl">
          Learn new skills online with ease
        </h1>
        <p className="text-lg sm:text-base flex text-center  sm:w-auto " >
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
        <div className="flex gap-2 w-[380px] items-center sm:w-auto mb-2">
          <Button className='bg-black text-white'>Start learning now</Button>
          <Button>Explore courses</Button>
        </div>
      </div>
    </div>
    <div className="w-full sm:w-1/2 flex justify-center items-center">
      <Image src="/images/landingpage.svg" alt="icon" width={428} height={300} />
    </div>
  </div>
  );
};

export default Landingpage;
