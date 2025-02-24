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
      <section className="block w-full bg-[#fafbfd] py-12 md:py-20">
        {/* <div className="absolute z-0 w-full h-full">
          <img
            alt="Background Fold Image"
            src={mainBG}
            data-nimg="fill"
            className="transition-opacity duration-500 opacity-100 z-0"
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
        </div> */}
        <div className="w-full p-8 lg:p-0 md:m-auto xl:max-w-7xl lg:max-w-4xl z-10">
          <div className="flex flex-col gap-2 lg:flex-row justify-center">
            <div className="flex flex-col w-full xl:w-[60%] lg:w-1/2 items-center lg:items-start justify-center">
              <h1 className=" font-medium font-rubik text-3xl leading-10 md:text-5xl text-center lg:text-start lg:text-5xl xl:text-6xl md:leading-[56px]  lg:leading-[76px] text-[#2d3639] z-[2] ">
                Resume’s <span>Resume</span> <span>Builder</span> helps you get
                hired at top companies
              </h1>
              <div className="flex flex-row gap-8 my-4 md:my-8">
                <Button className="py-2 h-14 bg-[#0096ff] z-10" size="lg">
                  Create Your CV
                </Button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="text-gray-500 font-rubik font-semibold text-center lg:text-start pt-8 pb-4">
                  Loved by interviewers at
                </h5>
                <div className="flex flex-row gap-2 md:gap-4 lg:gap-3 xl:gap-6 w-full items-center z-[2] ">
                  <div className="flex items-center">
                    <img
                      src={imgTesla}
                      className="max-w-[52px] md:max-w-[72px] h-auto"
                    ></img>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={imgGoogle}
                      className="max-w-[52px] md:max-w-[72px] h-auto"
                    ></img>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={imgFacebook}
                      className="max-w-[52px] md:max-w-[72px] h-auto"
                    ></img>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={imgSpotify}
                      className="max-w-[52px] md:max-w-[72px] h-auto"
                    ></img>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={imgAmazon}
                      className="max-w-[52px] md:max-w-[72px] h-auto"
                    ></img>
                  </div>
                </div>
              </div>
              <h2 className="mt-12 mb-8 md:mt-24 md:mb-16 font-normal font-rubik text-2xl md:text-4xl text-center lg:text-start leading-9 text-[#2d3639] z-[2]">
                Pick a resume template and build your resume in minutes!
              </h2>
            </div>
            <div className="h-[30rem] md:h-[40rem] flex items-center justify-center md:px-36 lg:px-0 w-full xl:w-[40%] lg:w-1/2">
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
