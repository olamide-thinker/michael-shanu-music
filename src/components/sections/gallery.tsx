"use client"
import Image from 'next/image'
import React from 'react'
import { LargeImage } from '../Comps/largeImage'
import { Button } from '../ui/button'

const Gallery = () => {
const[open, setOpen] = React.useState(true)

  return (
    <div className='p-8'>
          <h2 className='font-bold'>
        Photo Gallery
         </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-8 '>
            {Array.from({length:12}).map((_,i)=>(
                <div key={i} onClick={()=>{setOpen(!open)}}>

<Image src={'/asset/video.jpg'} alt={''} width={500} height={500}/>


{!open && <div className='h-screen w-full bg-black/70 flex items-center justify-center fixed z-50 top-0 left-0 '>
<Button
    onClick={()=>{
        console.log('clicked ')
        setOpen(!open)}}
    className=' absolute right-4 top-4 z-50'>Close</Button>

<LargeImage/>         
 </div>}  


                </div>
            ))}
        </div>



        </div>
  )
}

export default Gallery