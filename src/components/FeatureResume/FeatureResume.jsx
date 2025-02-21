import React from "react";
import { PulsatingButton } from "../magicui/pulsating-button";
import bgCard from "../../assets/Images/bg-card.svg";
import resume from "../../assets/Images/Resume/resume1.png";

const FeatureResume = () => {
  return (
    <>
      <section className="w-full h-full">
        <div className="m-auto lg:max-w-7xl py-20">
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="font-semibold text-5xl pb-4 text-[#2a97e6]">
                A feature-packed resume builder
              </h2>
              <p className="text-gray-800 pr-20">
                Easily edit your resume with Enhancv’s drag-and-drop resume
                builder. Choose from different templates, various backgrounds
                and sections.
              </p>
              <div className="flex flex-row flex-wrap items-center mt-8">
                <PulsatingButton>Build Your Resume</PulsatingButton>
              </div>
            </div>
            <div className="relative flex z-[2]">
              <img src={resume} className="z-[2] rounded-lg"></img>
              <div className=" h-full absolute right-[-16px] bottom-[-16px] w-[102%] rounded-xl z-0">
                <div className=" h-full">
                  <img className="w-full h-full bg-[#2a97e6]/[.6] rounded-lg"></img>
                </div>
              </div>
              <div className=" h-full absolute right-[-32px] bottom-[-32px] w-[102%] rounded-xl z-0">
                <div className="h-full">
                  <img className="w-full h-full bg-[#2a97e6]/[.6] rounded-lg"></img>
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
