import AboutMe from "@/components/sections/aboutMe";
import Footer from "@/components/sections/footer";
import GodBless from "@/components/sections/godBless";
import Hero from "@/components/sections/hero";
import MusicProjects from "@/components/sections/musicProjects";


export default function Home() {
 
  return (
    <main className="flex border overflow-hidden min-h-screen w-screen flex-col gap-8 items-center ">
     <Hero/>
     <AboutMe/>
     <MusicProjects/>
     <GodBless/>
     <Footer/>
    </main>
  );
}
