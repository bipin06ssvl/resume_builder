import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-full border-t border-gray-400">
        <div className="m-auto lg:max-w-7xl pt-20">
          <div className="w-full flex justify-center text-3xl mb-10">
            <Link className="group flex items-center gap-2">
              Create a Resume{" "}
              <i className="fa-solid fa-chevron-right text-lg text-white bg-gray-700 group-hover:bg-[#0096ff] w-12 h-12 pt-[10px] text-center rounded-full"></i>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 py-4 px-20 gap-2">
            <div className="flex flex-col">
              <div className="pb-4 font-medium">Get Started</div>
              <ul className="text-gray-800">
                <li className="pb-2">
                  <Link className="hover:text-[#0096ff]">Create Resume</Link>
                </li>
                <li className="pb-2">
                  <Link className="hover:text-[#0096ff]">Pricing</Link>
                </li>
                <li className="pb-2">
                  <Link className="hover:text-[#0096ff]">Terms of Service</Link>
                </li>
                <li className="pb-2">
                  <Link className="hover:text-[#0096ff]">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="pb-4 font-medium">Resume</div>
              <ul className="text-gray-800">
                <li className="pb-2">
                  <Link className="hover:text-[#0096ff]">Resume Examples</Link>
                </li>
                <li className="pb-2">
                  <Link className="hover:text-[#0096ff]">Resume Templates</Link>
                </li>
                <li className="pb-2">
                  <Link className="hover:text-[#0096ff]">Resume Builder</Link>
                </li>
                <li className="pb-2">
                  <Link className="hover:text-[#0096ff]">Resume Formats</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="pb-4 font-medium">About us</div>
              <ul className="text-gray-800">
                <li className="pb-2">
                  <Link className="hover:text-[#0096ff]">Company</Link>
                </li>
                <li className="pb-2">
                  <Link className="hover:text-[#0096ff]">Careers</Link>
                </li>
                <li className="pb-2">
                  <Link className="hover:text-[#0096ff]">Reviews</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="pb-4 font-medium">Contact us</div>
              <ul className="text-gray-800">
                <li className="pb-2">
                  <Link className="hover:text-[#0096ff]">
                    support@resume.com
                  </Link>
                </li>
                <li className="pb-2">
                  <Link className="hover:text-[#0096ff]">Help</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 md:px-0 py-8 text-center text-gray-900 border-t border-gray-400">
            Made with love by people who care. SSVL Technologies © 2025. All
            rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
