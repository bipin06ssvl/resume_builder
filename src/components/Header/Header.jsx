import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";

const Header = () => {
  return (
    <>
      <div className="h-16"></div>
      <nav className="bg-[#fafbfd] border-b-[#fafbfd] h-16 fixed top-0 w-full list-none transition-[padding,background,color] duration-500 z-[1000] pl-8 pr-8 items-center flex flex-row flex-wrap">
        <div className="flex items-center justify-between grow lg:grow-0 flex-row flex-wrap">
          <Link
            to={"/"}
            className="text-3xl text-[#0096ff] font-rubik font-semibold"
          >
            Resume
          </Link>
          <BurgerMenu />
        </div>
        <Menu />
      </nav>
    </>
  );
};

export default Header;
