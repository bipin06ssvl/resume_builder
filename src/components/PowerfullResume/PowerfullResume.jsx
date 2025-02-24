import React from "react";

const resumeList = [
  {
    icon: <i className="fa-solid fa-file-invoice"></i>,
    title: "A better resume in minutes",
    desc: "Replace your old resume in a few simple clicks. Our builder gives recruiters what they want.",
  },
  {
    icon: <i className="fa-solid fa-shield-halved"></i>,
    title: "ATS-friendly templates",
    desc: "Tick every box and make sure your resume is never filtered out by the hiring software.",
  },
  {
    icon: <i className="fa-solid fa-pen-nib"></i>,
    title: "Pre-written content",
    desc: "Stop worrying about words. Save time by adding pre-approved, tested content from certified writers.",
  },
  {
    icon: <i className="fa-solid fa-business-time"></i>,
    title: "Easy to create",
    desc: "Quickly generate formal phrases and summaries. Sound professional, faster.",
  },
  {
    icon: <i className="fa-solid fa-binoculars"></i>,
    title: "Beat the competition",
    desc: "Our tested resume templates are designed to make you more attractive to recruiters.",
  },
  {
    icon: <i className="fa-solid fa-envelope-open"></i>,
    title: "Get paid more",
    desc: "A higher salary begins with a strong resume. Our salary analyzer tells you if your job offer is competitive (or not).",
  },
];
const PowerfullResume = () => {
  return (
    <>
      <section className="w-full">
        <div className="w-full px-4 lg:p-0 md:m-auto xl:max-w-7xl lg:max-w-4xl py-10 lg:py-20">
          <div className="flex justify-center w-full pb-10 lg:pb-20 ">
            <h1 className="text-center font-rubik text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mx-4 lg:mx-24 z-[2]">
              Get hired fast with a powerful resume
            </h1>
          </div>
          <div className="grid grid-cols-1 ms:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-12 lg:gap-24">
            {resumeList.map((resume, index) => (
              <div key={index} className="col-span-1 row-span-2">
                <div className="flex items-start gap-4">
                  <div className="text-[#ff9735] text-[44px]">
                    {resume.icon}
                  </div>
                  <div className="">
                    <h3 className="font-medium text-xl pb-1 text-[#2a97e6]">
                      {resume.title}
                    </h3>
                    <p className="font-normal text-lg text-gray-900">
                      {resume.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PowerfullResume;
