import { IoMdSearch } from "react-icons/io";

import { IoIosNotifications } from "react-icons/io";

import { IoLogOutOutline } from "react-icons/io5";
import { useExpenseData } from "../utils/useExpenseData";

export default function Header({ setIsLoggedIn }) {
  const { setUserType } = useExpenseData();
  return (
    <header className="py-2  bg-[#ffffff] w-[98%] rounded-md flex justify-between items-center mt-2 shadow-md px-2">
      <h2 className="flex items-center gap-1 font-medium text-gray-700">
        {"👋"}
        Hello, Welcome back
      </h2>
      <div className="flex items-center gap-3">
        <div className="flex items-center border-1 p-1 rounded-md gap-1">
          <IoMdSearch className="mt-1 text-[20px]" />
          {"|"}
          <input
            type="text"
            placeholder="Search anything"
            className="outline-none"
          />
        </div>
        <div className="flex gap-2 items-center">
          <IoIosNotifications className="text-2xl" />
          <IoLogOutOutline
            className="text-2xl cursor-pointer"
            type="button"
            onClick={function () {
              setIsLoggedIn(false);
              setUserType("");
            }}
          />
        </div>
      </div>
    </header>
  );
}
