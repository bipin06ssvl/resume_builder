import React from "react";
import ResumeSlider2 from "./ResumeSlider";

const Templates = () => {
  return (
    <>
      <section className="w-full h-full bg-[#2d3639]">
        <div className="m-auto lg:max-w-7xl py-20">
          <div className="flex flex-col justify-center w-full ">
            <h1 className="text-center font-rubik text-5xl font-bold text-white mx-24 mb-8 z-[2]">
              Proven resume templates
            </h1>
            <p className="text-center mx-24 text-white">
              These resume templates are here because they work. Every one is
              tried and tested on real hiring managers
            </p>
          </div>
          <div className="relative w-full mt-10 mx-auto overflow-hidden h-full z-10">
            <ResumeSlider2 />
          </div>
        </div>
      </section>
    </>
  );
};

export default Templates;
