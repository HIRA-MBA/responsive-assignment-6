import React from 'react'
import Image from 'next/image'

const Logo2 = () => {return(
    <div className="w-full  bg-grey flex flex-col sm:flex-row">
        
    <p className=" w-[327px] text-2xl font-bold pt-10 text-center ">
      Trusted by 2000+ companies worldwide.
    </p>
    <div className="flex justify-between w-full sm:w-auto sm:order-1">
  <Image src="/logo2/Airbnb.svg" alt="logo" width={107.33} height={33} className="w-full sm:w-auto object-contain object-center overflow-hidden" />
  <Image src="/logo2/Airbnb1.svg" alt="logo" width={107.33} height={33} className="w-full sm:w-auto object-contain object-center overflow-hidden" />
  <Image src="/logo2/Airbnb2.svg" alt="logo" width={107.33} height={33} className="w-full sm:w-auto object-contain object-center overflow-hidden" />
  <Image src="/logo2/Airbnb3.svg" alt="logo" width={107.33} height={33} className="w-full sm:w-auto object-contain object-center overflow-hidden" />
  <Image src="/logo2/Airbnb4.svg" alt="logo" width={107.33} height={33} className="w-full sm:w-auto object-contain object-center overflow-hidden" />
  <Image src="/logo2/Airbnb5.svg" alt="logo" width={107.33} height={33} className="w-full sm:w-auto object-contain object-center overflow-hidden" />
</div>
  </div>
  );
};

export default Logo2;