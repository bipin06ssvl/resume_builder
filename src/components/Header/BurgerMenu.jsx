import { useState } from "react";
import { motion } from "framer-motion";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Burger Menu Button */}
      <div
        className="flex flex-col justify-between w-[30px] h-[24px] cursor-pointer z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Top Bar */}
        <motion.span
          className="block w-full h-[3px] bg-black rounded-full"
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 10 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Middle Bar (Hidden When Open) */}
        <motion.span
          className="block w-full h-[3px] bg-black rounded"
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Bottom Bar */}
        <motion.span
          className="block w-full h-[3px] bg-black rounded"
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -10 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Sidebar Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="lg:hidden fixed top-16 left-0 h-full w-64 bg-white shadow-lg p-5 flex flex-col items-start z-0"
      >
        {/* Close Button */}
        {/* <button
          className="self-end text-2xl font-bold mb-5"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button> */}

        {/* Menu Items */}
        <ul className="space-y-4 text-lg">
          <li className="cursor-pointer hover:text-gray-600 pb-3">Resume</li>
          <li className="cursor-pointer hover:text-gray-600 pb-3">Pricing</li>
          <li className="cursor-pointer hover:text-gray-600 pb-3">
            For Organization
          </li>
        </ul>
      </motion.div>

      {/* Overlay (Click Outside to Close) */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )} */}
    </div>
  );
};

export default BurgerMenu;
