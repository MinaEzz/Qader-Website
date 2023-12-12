import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { LuLayers, LuUsers, LuShoppingCart, LuLogOut } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="bg-white fixed lg:w-1/5 w-full flex flex-col items-center lg:rounded-tl-3xl lg:rounded-bl-3xl">
      <div className="h-32  w-full mb-8 flex items-center justify-center">
        <Link to="/dashboard" className="">
          <img
            className="h-full"
            src={logo}
            alt="Qader Website Logo"
            loading="lazy"
          />
        </Link>
      </div>
      {/* ./logo */}

      <ul className="w-full flex lg:flex-col lg:space-y-4 lg:space-x-0 space-x-4 overflow-x-auto items-center capitalize text-lg font-medium">
        <li className="w-full lg:hover:pl-3 transition-all bg-gray-200">
          <Link to="" className="flex items-center py-2 px-4 active:bg-gray-50">
            <LuLayers />
            <span className="ml-2">dashboard</span>
          </Link>
        </li>

        <li className=" w-full lg:hover:pl-3 transition-all">
          <Link to="" className="flex items-center py-2 px-4">
            <HiOutlineSquares2X2 />
            <span className="ml-2">products</span>
          </Link>
        </li>

        <li className=" w-full lg:hover:pl-3 transition-all">
          <Link to="" className="flex items-center py-2  px-4">
            <LuUsers />
            <span className="ml-2">customers</span>
          </Link>
        </li>

        <li className=" w-full lg:hover:pl-3 transition-all">
          <Link to="" className="flex items-center py-2  px-4">
            <LuShoppingCart />
            <span className="ml-2">orders</span>
          </Link>
        </li>

        <li className=" w-full lg:hover:pl-3 transition-all">
          <Link to="" className="flex items-center py-2  px-4">
            <MdOutlineLocalShipping />
            <span className="ml-2">shipments</span>
          </Link>
        </li>

        <li className=" w-full lg:hover:pl-3 transition-all">
          <Link to="" className="flex items-center py-2  px-4">
            <CiCreditCard1 />
            <span className="ml-2">transactions</span>
          </Link>
        </li>

        <li className=" w-full lg:hover:pl-3 transition-all">
          <Link to="" className="flex items-center py-2  px-4">
            <IoSettingsOutline />
            <span className="ml-2">setting</span>
          </Link>
        </li>

        <li className=" w-full lg:hover:pl-3 transition-all">
          <Link to="" className="flex items-center py-2  px-4">
            <LuLogOut />
            <span className="ml-2">logout</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
