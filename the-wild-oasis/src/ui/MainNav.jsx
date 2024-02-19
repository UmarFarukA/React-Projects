import { IoHomeOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdCabin } from "react-icons/md";
import { PiUsersThreeThin } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <ul className="pl-4 flex flex-col items-start gap-8">
      <li className="hover:text-stone-400 hover:transition-all">
        <NavLink to="dashboard" className="flex items-center gap-3">
          <IoHomeOutline />
          <span>Home</span>
        </NavLink>
      </li>
      <li className="hover:text-stone-400 hover:transition-all">
        <NavLink to="booking" className="flex items-center gap-3">
          <SlCalender />
          <span>Booking</span>
        </NavLink>
      </li>
      <li className="hover:text-stone-400 hover:transition-all">
        <NavLink to="cabin" className="flex items-center gap-3">
          <MdCabin />
          <span>Cabin</span>
        </NavLink>
      </li>
      <li className="hover:text-stone-400 hover:transition-all">
        <NavLink to="users" className="flex items-center gap-3">
          <PiUsersThreeThin />
          <span>Users</span>
        </NavLink>
      </li>
      <li className="hover:text-stone-400 hover:transition-all">
        <NavLink to="settings" className="flex items-center gap-3">
          <IoSettingsOutline />
          <span>Settings</span>
        </NavLink>
      </li>
    </ul>
  );
}
