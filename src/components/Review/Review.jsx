import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import mainBG from "../../assets/Images/half-gradient-bg.svg";
import StarRating from "../StarRating/StarRating";

const reviews = [
  {
    name: "Edwin Morton",
    username: "about 6 hours ago",
    title: "Creating resumes have never been so…",
    body: "Creating resumes have never been so easy.....recommondation create a master resume and let ai tailor it for the job.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Shreyas Manjunath",
    username: "1 day ago",
    title: "The ease of use",
    body: "The selection of templates and how easy it is to edit using our own details.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Mansi Sawant",
    username: "1 day ago",
    title: "Amazing website for creating Cv's",
    body: "best website to create your cv . they also have amazing templates .",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Liz",
    username: "2 days ago",
    title: "Easy to use",
    body: "Easy to use! Love the templates and how nice was to have AI along the way.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Teresa Timmons",
    username: "2 days ago",
    title: "Best resume maker I've ever used",
    body: "Best resume maker I've ever used! It has landed me my dream job in NYC.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Edwin Morton",
    username: "about 6 hours ago",
    title: "Creating resumes have never been so…",
    body: "Creating resumes have never been so easy.....recommondation create a master resume and let ai tailor it for the job.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const ReviewCard = ({ img, name, username, body, title }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-white hover:bg-white/[.9]",
        "dark:border-gray-50/[.1] dark:bg-white/[.10] dark:hover:bg-white/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <div className="flex flex-col">
          <StarRating />
          <h4 className="text-lg font-rubik font-medium text-gray-900 dark:text-white">
            {title}
          </h4>
          <blockquote className="mt-2 font-rubik text-sm mb-8 text-gray-700">
            {body}
          </blockquote>
        </div>
      </div>
      <div className="absolute flex flex-row gap-2 items-center bottom-1">
        <figcaption className=" text-sm font-rubik font-normal text-gray-500 ">
          {name}
        </figcaption>

        <p className="text-xs font-rubik font-normal text-gray-500">
          {username}
        </p>
      </div>
    </figure>
  );
};

const Review = () => {
  return (
    <>
      <section className="w-full h-full bg-[#2d3639] ">
        <div className="m-auto lg:max-w-7xl py-20">
          {/* <div className="absolute w-[90%] h-[80%] align-middle z-0">
            <img
              alt="Enhancv Background Fold Image"
              src={mainBG}
              data-nimg="fill"
              className="transition-opacity duration-500 opacity-100 align-middle"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: "fill",
                objectPosition: "bottom",
                color: "transparent",
                // paddingBottom: "8%",
              }}
            ></img>
          </div> */}
          <div className="flex w-full pb-20 ">
            <h1 className="font-rubik text-center text-6xl font-bold text-white mx-24 z-[2]">
              Reviewed by the community. Trusted by professionals
            </h1>
          </div>
          <div className="group relative flex w-full flex-col items-center justify-center overflow-hidden ">
            <Marquee pauseOnHover className="[--duration:20s] z-[2]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>

            {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div> */}
            {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
