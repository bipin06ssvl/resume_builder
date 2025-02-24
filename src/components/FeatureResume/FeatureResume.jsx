import React from "react";
import { PulsatingButton } from "../magicui/pulsating-button";
import bgCard from "../../assets/Images/bg-card.svg";
import resume from "../../assets/Images/Resume/resume1.png";

const FeatureResume = () => {
  return (
    <>
      <section className="w-full ">
        <div className="w-full px-4 lg:p-0 md:m-auto xl:max-w-7xl lg:max-w-4xl py-10 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center mb-14 md:mb-0">
              <h2 className="font-semibold text-center md:text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-4 text-[#2a97e6]">
                A feature-packed resume builder
              </h2>
              <p className="text-gray-800 md:pr-20 text-center md:text-start">
                Easily edit your resume with Enhancv’s drag-and-drop resume
                builder. Choose from different templates, various backgrounds
                and sections.
              </p>
              <div className="flex flex-row flex-wrap justify-center md:justify-start items-center mt-8">
                <PulsatingButton>Build Your Resume</PulsatingButton>
              </div>
            </div>
            <div className="flex items-center justify-center ml-4 md:ml-0 w-[90%]">
              <div className="relative flex z-[2]">
                <img src={resume} className="z-[2] rounded-lg"></img>
                <div className=" h-[104%] absolute right-[-14px] bottom-[-12px] w-[103%] rounded-xl z-0">
                  <div className=" h-full">
                    <img className="w-full h-full bg-[#2a97e6]/[.6] rounded-lg"></img>
                  </div>
                </div>
                <div className=" h-[108%] absolute right-[-28px] bottom-[-24px] w-[103%] rounded-xl z-0">
                  <div className="h-full">
                    <img className="w-full h-full bg-[#2a97e6]/[.6] rounded-lg"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureResume;
