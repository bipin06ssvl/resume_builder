import React from "react";
const Menu = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap flex-1 justify-between h-full ml-8">
      <div className="flex flex-row flex-wrap items-center">
        <div className="flex flex-row flex-wrap items-center font-normal pr-10 h-full">
          <div className="flex flex-row flex-wrap items-center cursor-pointer font-rubik">
            Resume
            <i className="fa-solid fa-chevron-down text-sm pl-2"></i>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center font-normal pr-10 h-full">
          <div className="flex flex-row flex-wrap items-center cursor-pointer font-rubik">
            Pricing
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center font-normal pr-10 h-full">
          <div className="flex flex-row flex-wrap items-center cursor-pointer font-rubik">
            For Organizations
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
