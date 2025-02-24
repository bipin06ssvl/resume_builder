/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import imgResume1 from "../../assets/Images/Resume/resume1.png";
import imgResume2 from "../../assets/Images/Resume/resume2.png";
import imgResume3 from "../../assets/Images/Resume/resume3.png";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
const CategoryResume = () => {
  const categoryList = [
    {
      title: "Business Analyst",
      icon: <i className="fa-brands fa-python text-2xl"></i>,
      template: imgResume1,
    },
    {
      title: "Data Scientist",
      icon: <i className="fa-solid fa-database text-xl"></i>,
      template: imgResume2,
    },
    {
      title: "Product Manager",
      icon: <i className="fa-solid fa-user-gear text-xl"></i>,
      template: imgResume3,
    },
    {
      title: "Software Engineer",
      icon: <i className="fa-solid fa-laptop text-xl"></i>,
      template: imgResume1,
    },
    {
      title: "Sales",
      icon: <i className="fa-solid fa-suitcase text-xl"></i>,
      template: imgResume2,
    },

    {
      title: "Teacher",
      icon: <i className="fa-solid fa-pen-ruler text-xl"></i>,
      template: imgResume3,
    },
    {
      title: "Engineer",
      icon: <i className="fa-solid fa-gears text-xl"></i>,
      template: imgResume1,
    },
    {
      title: "Accounting",
      icon: <i className="fa-solid fa-folder-open text-xl"></i>,
      template: imgResume2,
    },
    {
      title: "Designer",
      icon: <i className="fa-solid fa-palette text-xl"></i>,
      template: imgResume3,
    },
    {
      title: "Marketing",
      icon: <i className="fa-solid fa-store text-xl"></i>,
      template: imgResume1,
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handelCategory = (index) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <section className="w-full border-t border-gray-400">
        <div className="w-full px-4 lg:p-0 md:m-auto xl:max-w-7xl lg:max-w-4xl py-10 lg:py-20">
          <div className="flex justify-center w-full pb-5 lg:pb-20 ">
            <h1 className="text-center font-rubik text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mx-4 lg:mx-24 z-[2]">
              The resume builder that’s right for your job and experience
            </h1>
          </div>

          <div className="h-full flex flex-col lg:flex-row items-center justify-center gap-8 my-10">
            <div className=" hidden lg:block w-1/4">
              {categoryList.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row flex-wrap items-center cursor-pointer rounded-full transition-all duration-600 my-2 mb-2 pr-4 w-fit"
                  onClick={() => handelCategory(index)}
                >
                  <div
                    className={`group flex flex-nowrap items-center cursor-pointer rounded-full transition-all duration-[600ms] my-2 mb-2 pr-4 w-fit hover:bg-[#2a97e6] ${
                      index === selectedIndex ? "bg-[#2a97e6]" : ""
                    }`}
                  >
                    <div
                      className={`bg-[#2a97e6] rounded-full p-4 text-white flex items-center justify-center w-14 h-14 transition-transform duration-500 transform group-hover:rotate-[-45deg] ${
                        index === selectedIndex ? "rotate-[-45deg]" : ""
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div
                      className={`text-md font-semibold ml-4 text-gray-700 transition-all duration-500 group-hover:ml-0 group-hover:text-[#fff] ${
                        index === selectedIndex
                          ? "ml-0 text-[#fff]"
                          : "ml-4 text-gray-700"
                      }`}
                    >
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:hidden">
              {/* <CategoryMenu /> */}

              <NavigationMenu>
                <NavigationMenuList>
                  {/* Getting Started */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <div className="flex flex-row flex-wrap items-center cursor-pointer rounded-full transition-all duration-600 my-2 mb-2 pr-4 w-fit">
                        <div
                          className={`flex flex-nowrap items-center cursor-pointer rounded-full transition-all duration-[600ms] my-2 mb-2 pr-4 w-fit}`}
                        >
                          <div
                            className={`bg-[#2a97e6] rounded-full p-4 text-white flex items-center justify-center w-14 h-14 transition-transform duration-500 transform`}
                          >
                            {categoryList[selectedIndex].icon}
                          </div>
                          <div
                            className={`text-md font-semibold ml-4 text-gray-700 transition-all duration-500`}
                          >
                            {categoryList[selectedIndex].title}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="flex flex-col w-[200px] gap-3 p-4 ">
                        {categoryList.map((item, index) => (
                          <ListItem
                            key={index}
                            className="row-span-3 text-black"
                            title={item.title}
                            onClick={() => {
                              setSelectedIndex(index);
                            }}
                          ></ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className=" w-full px-2 lg:px-0 lg:w-1/2">
              <Link to="#">
                <div className="max-w-[660px] relative">
                  <img
                    src={categoryList[selectedIndex].template}
                    className={`rounded-[30px] shadow-[0_0px_10px_rgb(0,0,0,0.2)] animate-fade-in [animation-duration:0.7s] `}
                  ></img>
                  <div className="bg-[#2a97e6] shadow-[0_0px_10px_rgb(0,0,0,0.2)] absolute flex items-center justify-center rounded-full p-6 text-white w-20 h-20 right-[-5%] top-[-5%] text-[40px] leading-none z-10 [--scaleValue:0.3] animate-zoom-in [animation-duration:0.7s]">
                    {categoryList[selectedIndex].icon}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
// Reusable ListItem Component
const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md px-3 py-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
export default CategoryResume;
