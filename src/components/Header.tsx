import LogoSVG from "../assets/logo.svg";
import { FiSearch } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";

function Header() {
  return (
    <div className=" mx-auto flex max-w-[1370px] items-center justify-between gap-6 py-4">
      <div>
        <img src={LogoSVG} alt="logo" className="object-contain" />
      </div>
      <div className="relative flex flex-1">
        <div className="absolute left-4 top-4">
          <FiSearch />
        </div>
        <input
          type="text"
          className=" w-full pl-12 pr-4 placeholder:text-sm placeholder:text-black"
          placeholder="Search a product here..."
        />
        <button className="flex items-center gap-2 rounded-r bg-dk-primary-500 px-2 py-3 font-semibold text-white">
          <FiSearch />
          <span>SEARCH</span>
        </button>
      </div>
      <div className="flex items-center gap-3 p-1">
        <div className="text-3xl">
          <RiAccountCircleFill />
        </div>
        <span>Account</span>
        <BiChevronDown />
      </div>
      <div className="flex items-center gap-3 p-1">
        <div className="text-3xl">
          <MdLocationOn />
        </div>
        <span>Nigeria</span>
      </div>
      <div className="flex items-center gap-3 p-1">
        <span>Cart</span>
        <div className="text-3xl">
          <HiShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default Header;
