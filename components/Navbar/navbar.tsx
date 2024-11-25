import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <div>
        <div className="hidden md:flex justify-between  text-sm gap-4 ">
      
    <Image src={'/images/logo.svg'} alt={'logo'} width={130} height={41} />
     
   <ul className='flex mt-4 gap-3'>
   
     <li>Home</li>
     <li>Courses</li>
     <li>Services</li>
     <li>Acheivements</li>
     <li>About Us</li>
     <li>Testimonials</li>
   </ul>
   <div className='flex gap-2 pr-2 mt-4'>

   <Button className='w-[60px] h-[20px] bg-black text-white'>Login In</Button>
   <Button className='w-[60px] h-[20px] bg-slate-400 '>Sign Up</Button>
    
   
   </div>
   </div>

   
 
  <div className= 'md:hidden  flex justify-between  '>
   
   
   
   <Image src={'/images/logo.svg'} alt={'logo'} width={130} height={41} />

    <Image src={'./images/vector.svg'} alt='header' width={48} height={48}/>
    
   
   </div>
   </div>

      
  )
}

export default Navbar
