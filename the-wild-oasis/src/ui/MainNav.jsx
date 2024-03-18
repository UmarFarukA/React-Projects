import { IoHomeOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdCabin } from "react-icons/md";
import { PiUsersThreeThin } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Uploader from "../data/Uploader";

export default function MainNav() {
  return (
    <ul className="pl-4 flex flex-col items-start gap-8 text-md">
      <li className="hover:text-stone-400 transition-all hover:ease-linear hover:delay-100 hover:translate-x-2 hover:scale-110">
        <NavLink
          to="dashboard"
          className="flex items-center gap-3 hover:text-purple-600"
        >
          <IoHomeOutline className="" />
          <span>Home</span>
        </NavLink>
      </li>
      <li className="hover:text-stone-400 hover:transition-all">
        <NavLink
          to="booking"
          className="flex items-center gap-3 hover:text-purple-600"
        >
          <SlCalender />
          <span>Booking</span>
        </NavLink>
      </li>
      <li className="hover:text-stone-400 hover:transition-all">
        <NavLink
          to="cabin"
          className="flex items-center gap-3 hover:text-purple-600"
        >
          <MdCabin />
          <span>Cabin</span>
        </NavLink>
      </li>
      <li className="hover:text-stone-400 hover:transition-all">
        <NavLink
          to="users"
          className="flex items-center gap-3 hover:text-purple-600"
        >
          <PiUsersThreeThin />
          <span>Users</span>
        </NavLink>
      </li>
      <li className="hover:text-stone-400 hover:transition-all">
        <NavLink
          to="settings"
          className="flex items-center gap-3 hover:text-purple-600"
        >
          <IoSettingsOutline />
          <span>Settings</span>
        </NavLink>
      </li>

      <div className="mt-8">
        <Uploader />
      </div>
    </ul>
  );
}
