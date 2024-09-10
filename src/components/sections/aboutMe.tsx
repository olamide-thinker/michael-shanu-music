import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Image from "next/image";
import { AboutUs_carousel } from "../Comps/aboutUs_carousel";

const AboutMe = () => {
  return (
    <div className="w-screen sm:h-full mb-60  sm:mb-20 sm:px-8 px-2 space-y-2">
      <div className=" bg-white text-black rounded-3xl  shadow-lg h-fit">
        <div className="h-fit px-10 py-4 flex items-center gap-3 justify-between ">
          <div className="flex gap-3 ">
            <h2 className="font-bold"> About Me</h2>
            <Separator
              orientation="vertical"
              className=" h-[40px] opacity-30"
            />
            <p className="max-w-[460px]  text-sm leading-tight -tracking-tighter">
              Sing to the LORD a new song, for he has done marvelous things; his
              right and his holy arm have worked salvation for him
            </p>
          </div>
          <div className=" space-x-2 hidden sm:flex">

            <Button size={"icon"} className=" rounded-full p-6">
              {" "}
             {" "}
            </Button>
            <Button size={"icon"} className=" rounded-full p-6">
              {" "}
              {" "}
            </Button>
            <Button size={"icon"} className=" rounded-full p-6">
              {" "}
              {" "}
            </Button>
     
          </div>
        </div>

        <Separator />

        {/* body */}
        <div className=" p-4 flex items-center gap-3 justify-between ">
          <AboutUs_carousel />
        </div>

        {/* footer */}
        <div className="flex flex-col sm:flex-row sm:justify-between p-0  w-full">
          <div className=" h-full p-2 sm:px-8 flex sm:flex-row sm:items-center gap-3  ">
            <Image 
            className="w-24"
            src={"/asset/img-1.svg"} alt={""} height={150} width={150} />
            <h2 className="text-3xl sm:text-4xl  sm:w-[300px]">
              Ministering Good News Through Songs
            </h2>
          </div>
     

          <div className="flex  h-[151px]  sm:mt-8 relative z-10">
            <div className="bg-white  h-full w-24 rounded-b-3xl"></div>
            <div className="bg-black h-full w-[500px] sm:p-8 p-2 rounded-t-[50px]">
              <div className=" p-8 bg-white rounded-[40px]">
                <h3 className="font-bold mb-2">[ Psalms 98:1-7 ]</h3>
                <p>
                  Sing to the LORD a new song, for he has done marvelous things;
                  his right hand and his holy arm have worked salvation for him.
                  The LORD has made his salvation known and revealed his
                  righteousness to the nations.
                </p>
              </div>
            </div>
            <div className="bg-black -z-[1] h-10 w-5/6 absolute bottom-0 left-1/2 transform -translate-x-1/2 px-20 rounded-t-3xl"></div>
            <div className="bg-white h-full w-24 rounded-b-3xl"></div>
          </div>
          </div>
        </div>
      </div>

  );
};

export default AboutMe;
