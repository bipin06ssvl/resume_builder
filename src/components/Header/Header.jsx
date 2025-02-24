import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";
import { PulsatingButton } from "../magicui/pulsating-button";
import logo from "@/assets/Images/logo.png";

const Header = () => {
  return (
    <>
      <div className="h-16"></div>
      <nav className="bg-[#fafbfd] border-b-[#fafbfd] h-16 fixed top-0 w-full shadow-sm list-none transition-[padding,background,color] duration-500 z-[1000] pl-4 pr-4 md:pl-8 md:pr-8 items-center flex flex-row flex-wrap">
        <div className=" flex items-center justify-between grow lg:grow-0 flex-row flex-wrap w-full">
          <BurgerMenu />
          <Link
            to={"/"}
            className="flex items-center gap-2 sm:text-xl md:text-3xl text-[#01466b] font-playwrite text-center lg:text-start font-semibold"
          >
            <img src={logo} className="h-10 md:h-14"></img>
            Workpatrika
          </Link>
          {/* <BurgerMenu /> */}
          <Menu />
          <div className="flex flex-row flex-wrap items-center right-4 text-sm">
            <PulsatingButton>
              <span className="hidden ms:block">Sign in</span>
              <i className="fa-solid fa-arrow-right-to-bracket ms:hidden"></i>
            </PulsatingButton>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
