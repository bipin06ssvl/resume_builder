import React from "react";
import ResumeSlider2 from "./ResumeSlider";

const Templates = () => {
  return (
    <>
      <section className="w-full bg-[#d2d3d3]">
        <div className="w-full px-4 lg:p-0 md:m-auto xl:max-w-7xl lg:max-w-4xl py-10 lg:py-20">
          <div className="flex flex-col justify-center w-full ">
            <h1 className="text-center font-rubik text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mx-4 lg:mx-24 mb-8 z-[2]">
              Proven resume templates
            </h1>
            <p className="text-center mx-4 md:mx-12 lg:mx-24 text-gray-800">
              These resume templates are here because they work. Every one is
              tried and tested on real hiring managers
            </p>
          </div>
          <div className="relative w-full mt-5 md:mt-10 overflow-hidden h-full z-10">
            <ResumeSlider2 />
          </div>
        </div>
      </section>
    </>
  );
};

export default Templates;
