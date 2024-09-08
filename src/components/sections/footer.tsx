'use client'

import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { Button } from "../ui/button";


const Footer = () => {
  return (
    <div className="sm:px-16 p-2 py-8 w-full">
      <div className="bg-card flex bg-white text-black  items-center relative justify-center w-full sm:p-16 p-8 rounded-3xl">
        <div className="flex  gap-4 pb-4 justify-between items-center w-full flex-col sm:flex-row">
          {/* left side */}
          <div className="sm:w-[500px] space-y-4">
            <h2 className="text-[35px] font-bold">Ministering Good News Through Songs</h2>
            <p>
              {" "}
              Sing to the LORD a new song, for he has done marvelous things; his
              right and his holy arm have worked salvation for him
            </p>
            <p className="text-xs w-full absolute bottom-2  ">
              All rights reserved © Michael Shanu 2024
            </p>
          </div>

          {/* right side */}
          <div>
            <h3>Contact us</h3>
            <div className="flex items-center gap-2">

            <Button  variant={undefined} className="h-fit aspect-square w-fit rounded-full">
            <AiFillInstagram size={60} className="hover:scale-110 transition-all" /> 
            </Button>
           
            <Button  variant={undefined} className="h-fit aspect-square w-fit rounded-full">
            <AiFillYoutube size={60} className="hover:scale-110 transition-all"  />
            </Button>

            <Button  variant={undefined} className="h-fit aspect-square w-fit rounded-full">
            <BsTwitterX size={60} className="hover:scale-110 transition-all " />           
            </Button>
            </div>
            
          </div>


        </div>
      </div>
    </div>
  );
};

export default Footer;
