import mainBG from "../../assets/Images/main-bg.svg";
import imgResume1 from "../../assets/Images/Resume/resume1.png";
import imgResume2 from "../../assets/Images/Resume/resume2.png";
import imgResume3 from "../../assets/Images/Resume/resume3.png";
import imgTesla from "../../assets/Images/resources/tesla.png";
import imgGoogle from "../../assets/Images/resources/google.png";
import imgFacebook from "../../assets/Images/resources/facebook.png";
import imgSpotify from "../../assets/Images/resources/spotify.png";
import imgAmazon from "../../assets/Images/resources/amazon.png";
import { CardStack } from "../ui/CardStack";
import { Button } from "../ui/button";
import ResumeSlider from "../Templates/ResumeSlider";

const Hero = () => {
  const CARDS = [
    {
      id: 0,
      img: imgResume1,
    },
    {
      id: 1,
      img: imgResume2,
    },
    {
      id: 2,
      img: imgResume3,
    },
  ];

  return (
    <>
      <section className="relative bg-[#fafbfd] py-20 ">
        <div className="absolute z-0 w-full h-full">
          <img
            alt="Enhancv Background Fold Image"
            src={mainBG}
            data-nimg="fill"
            className="transition-opacity duration-500 opacity-100"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              objectFit: "fill",
              objectPosition: "center",
              color: "transparent",
              // paddingBottom: "16%",
            }}
          ></img>
        </div>
        <div className="w-full m-auto lg:max-w-7xl z-10">
          <div className="flex flex-col gap-2 lg:flex-row ">
            <div className="flex flex-col w-[60%]">
              <h1 className=" font-medium font-rubik text-6xl leading-[76px] text-[#2d3639] z-[2] ">
                Resume’s <span>Resume</span> <span>Builder</span> helps you get
                hired at top companies
              </h1>
              <div className="flex flex-row gap-8 my-8">
                <Button className="py-2 h-14 bg-[#0096ff]" size="lg">
                  Create Your CV
                </Button>
              </div>
              <div className="flex flex-col">
                <h5 className="text-gray-500 font-rubik font-semibold pt-8 pb-4">
                  Loved by interviewers at
                </h5>
                <div className="flex flex-row gap-6 w-full items-center z-[2] ">
                  <div className="flex items-center">
                    <img src={imgTesla} className="max-w-[72px] h-auto"></img>
                  </div>
                  <div className="flex items-center">
                    <img src={imgGoogle} className="max-w-[72px]"></img>
                  </div>
                  <div className="flex items-center">
                    <img src={imgFacebook} className="max-w-[72px]"></img>
                  </div>
                  <div className="flex items-center">
                    <img src={imgSpotify} className="max-w-[72px]"></img>
                  </div>
                  <div className="flex items-center">
                    <img src={imgAmazon} className="max-w-[72px] h-auto"></img>
                  </div>
                </div>
              </div>
              <h2 className="mt-24 mb-16 font-normal font-rubik text-4xl leading-9 text-[#2d3639] z-[2]">
                Pick a resume template and build your resume in minutes!
              </h2>
            </div>
            <div className="h-[40rem] flex items-center justify-center w-[40%]">
              <CardStack items={CARDS} />
            </div>
          </div>
          <div className="flex w-full mt-16 z-[2]">
            <h5 className="text-center font-rubik text-[#2d3639] z-[2]">
              Our online resume builder offers a quick and easy way to create
              your professional resume from designed templates. Whether you’re
              starting from scratch or refining an existing resume, our platform
              serves as a powerful resume generator and provides expert resume
              help at every step.
            </h5>
          </div>
        </div>
        {/* <div className="relative w-full mt-10 mx-auto overflow-hidden h-full z-10">
          <ResumeSlider />
        </div> */}
      </section>
    </>
  );
};

export default Hero;
