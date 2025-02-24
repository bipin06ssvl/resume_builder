import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";
import { PulsatingButton } from "../magicui/pulsating-button";

const Header = () => {
  return (
    <>
      <div className="h-16"></div>
      <nav className="bg-[#fafbfd] border-b-[#fafbfd] h-16 fixed top-0 w-full shadow-sm list-none transition-[padding,background,color] duration-500 z-[1000] pl-4 pr-4 md:pl-8 md:pr-8 items-center flex flex-row flex-wrap">
        <div className=" flex items-center justify-between grow lg:grow-0 flex-row flex-wrap w-full">
          <BurgerMenu />
          <Link
            to={"/"}
            className="text-3xl text-[#0096ff] text-center lg:text-start font-rubik font-semibold"
          >
            Resume
          </Link>
          {/* <BurgerMenu /> */}
          <Menu />
          <div className="flex flex-row gap-4 flex-wrap items-center right-4">
            <PulsatingButton>Sign in</PulsatingButton>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
