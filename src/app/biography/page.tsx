'use client'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const Biography = () => {
const router = useRouter()

  return (
    <main 
    className='w-full relative bg-top bg-[url("/asset/hero_background.jpg")] h-[95vh] flex justify-end items-start  bg-cover overflow-hidden '
    style={{ backgroundPosition: '30% 80%' }} 
    
    >

      {/* Gradient overlay */}
  <Image src={'/asset/img-round-text.svg'} alt={''} height={250} width={250} 
  className='absolute animate-spin-slow  -bottom-20 right-4'
  />
      <div className='h-1/2 bottom-0 w-full absolute bg-gradient-to-t from-[#0F0E0B] to-[#666666]/0 bg-blend-multiply'></div>

        <div className='absolute bottom-4 flex flex-col items-center p-4 sm:w-3/6 gap-6 z-10  bg-black/40 sm:bg-black/0'>


<nav className="text-white text-2xl space-x-1 text-center pt-4">
  <h2 className='sm:text-5xl text-5xl  text-white'>Michael Shanu</h2>
  <p className='text-sm tracking-widest'>Musician, song writer, and interior designer</p>
</nav>
<ScrollArea className='h-[65vh] px-3'>
<p className='max-w-[460px] text-center text-white/75 leading-tight -tracking-tighter'>
Michael Shanu is a visionary Nigerian music artist whose soul-stirring melodies and profound lyrics are dedicated to fostering holiness and nurturing deep, meaningful relationships. Michael has always been drawn to the transformative power of music, channeling this passion into a mission that transcends the boundaries of entertainment.
<br/><br/>
From an early age, Michael Shanu was captivated by the way music could touch hearts and elevate minds. Influenced by the rich tapestry of Nigerian musical heritage and global spiritual traditions, Michael Shanu embarked on a journey to blend these influences into a unique sound that speaks to both the spirit and the soul.
<br/><br/>
With a discography that includes 3 albums and numerous singles, Michael Shanu has made a mark with songs that explore themes of faith, love, and personal growth. Each track is crafted to inspire listeners to seek holiness and build stronger, more authentic relationships with themselves and others. Songs like “Oba Nla”, “Emmanuelli”, and "Oro" are celebrated for their lyrical depth and their ability to create spaces for reflection and connection.
<br/><br/>
In addition to their musical achievements, Michael Shanu is an active advocate for community engagement and spiritual enrichment. Through workshops, live performances, and collaborations with other like-minded artists and organizations, Michael Shanu continually strives to use their platform to promote a message of love, understanding, and spiritual upliftment.
<br/><br/>
Michael continue to share his gift with the world, and remain steadfast in his belief that music can be a powerful catalyst for positive change and divine connection.
</p>
</ScrollArea>
<Button 
onClick={()=> router.push('/')}
>Back</Button>
        </div>
    </main>
  )
}

export default Biography