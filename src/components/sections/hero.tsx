import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <main 
    className='w-full relative bg-top bg-[url("/asset/hero_background.jpg")] h-[95vh] flex justify-center items-center bg-cover overflow-hidden '
    style={{ backgroundPosition: '30% 80%' }} 
    
    >

      {/* Gradient overlay */}
  <Image src={'/asset/img-round-text.svg'} alt={''} height={250} width={250} 
  className='absolute animate-spin-slow  -bottom-20 right-4'
  />
      <div className='h-1/2 bottom-0 w-full absolute bg-gradient-to-t from-[#0F0E0B] to-[#666666]/0 bg-blend-multiply'></div>

        <div className='absolute bottom-4 flex flex-col items-center p-4 gap-6 z-10  '>


<nav className="text-white text-2xl space-x-1 text-center">
  <h2 className='sm:text-6xl text-5xl  text-white'>Michael Shanu</h2>
  <p className='text-2xl tracking-widest'>Music</p>
  {/* <button className='text-bold  hover:text-bolder underline-offset-4 underline'>About Me</button><span className='opacity-50'>/</span>
  <button className='text-bold  hover:text-bolder'>Music Project</button><span className='opacity-50'>/</span>
  <button className='text-bold hover:text-bolder'>Contact</button>
   */}
</nav>

<p className='max-w-[460px] text-center text-white/75 leading-tight -tracking-tighter'>
  Sing to the LORD a new song, for he has done marvelous things; his right and his holy arm have worked salvation for him
</p>
        </div>
    </main>
  )
}

export default Hero