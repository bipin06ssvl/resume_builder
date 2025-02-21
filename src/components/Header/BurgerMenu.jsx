import { useState } from "react";
import { motion } from "framer-motion";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-col justify-between w-[30px] h-[24px] cursor-pointer z-50 lg:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Top Bar */}
      <motion.span
        className="block w-full h-[3px] bg-black rounded"
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
  );
};

export default BurgerMenu;
