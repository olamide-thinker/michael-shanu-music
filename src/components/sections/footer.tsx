import React from "react";

const Footer = () => {
  return (
    <div className="sm:px-16 p-2 py-8 w-screen">
      <div className="bg-card flex bg-white text-black  items-center justify-center w-full p-16 rounded-3xl">
        <div className="flex justify-between items-center w-full flex-col sm:flex-row">
          {/* left side */}
          <div className="w-[500px] space-y-4">
            <h2 className="text-[35px] font-bold">Ministering Good News Through Songs</h2>
            <p>
              {" "}
              Sing to the LORD a new song, for he has done marvelous things; his
              right and his holy arm have worked salvation for him
            </p>
          </div>

          {/* right side */}
          <div>
            <h3>Contact us</h3>
            <p> Icons</p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Footer;
