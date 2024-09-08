

import AboutMe from "@/components/sections/aboutMe";
import Footer from "@/components/sections/footer";
import Gallery from "@/components/sections/gallery";
import GodBless from "@/components/sections/godBless";
import Hero from "@/components/sections/hero";
import MusicProjects from "@/components/sections/musicProjects";


export default function Home() {
 
  return (
    <main className="flex border overflow-hidden min-h-screen p-0 flex-col gap-8 items-center ">
     <Hero/>
     <AboutMe/>
     <MusicProjects/>
     <GodBless/>
     <Gallery/>
     <Footer/>
    </main>
  );
}
