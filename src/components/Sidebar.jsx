import { GrMoney } from "react-icons/gr";

import { IoMdHelpCircleOutline } from "react-icons/io";

import { IoMdSettings } from "react-icons/io";

export default function Sidebar() {
  return (
    <>
      <div className="bg-gray-700 h-[98%] w-[20%] ml-2 rounded-sm">
        <h2 className="text-white py-5 text-center text-xl border-b-1 font-medium items-center flex justify-center gap-1">
          <GrMoney />
          EZClaim
        </h2>
        <div className="flex flex-col px-4  py-2 mt-4">
          <h3 className="text-white text-[17px]">Dashboard</h3>
          <ul className="text-white px-2">
            <li className="cursor-pointer hover:underline text-[15.5px]">
              Overview
            </li>
            <li className="cursor-pointer hover:underline text-[15.5px]">
              Spending Summary
            </li>
            <li className="cursor-pointer hover:underline text-[15.5px]">
              Recent Activity
            </li>
          </ul>
        </div>
        <div className="flex flex-col px-4 py-2">
          <h3 className="text-white text-[17px]">Expenses</h3>
          <ul className="text-white px-2">
            <li className="cursor-pointer hover:underline text-[15.5px]">
              All Expenses
            </li>
            <li className="cursor-pointer hover:underline text-[15.5px]">
              Submit Expense
            </li>
            <li className="cursor-pointer hover:underline text-[15.5px]">
              Pending Approvals
            </li>
            <li className="cursor-pointer hover:underline text-[15.5px]">
              Reimbursed History
            </li>
            <li className="cursor-pointer hover:underline text-[15.5px] ">
              Expense Categories
            </li>
          </ul>
        </div>
        <div className="flex flex-col px-4 py-2">
          <h3 className="text-white text-[17px]">Reports</h3>
          <ul className="text-white px-2">
            <li className="cursor-pointer hover:underline text-[15.5px]">
              Monthly Reports
            </li>
            <li className="cursor-pointer hover:underline text-[15.5px]">
              Yearly Reports
            </li>
          </ul>
        </div>
        <div className="flex flex-col px-4 py-2">
          <h3 className="text-white text-[17px]">Approvals</h3>
          <ul className="text-white px-2">
            <li className="cursor-pointer hover:underline text-[15.5px]">
              Pending Approvals
            </li>
            <li className="cursor-pointer hover:underline text-[15.5px]">
              Approved Requests
            </li>
            <li className="cursor-pointer hover:underline text-[15.5px]">
              Declined Requests
            </li>
          </ul>
        </div>
        <div className="flex flex-col px-4 py-2">
          <h3 className="text-white text-[17px]">Others</h3>
          <div className="flex gap-1 items-center px-2 text-white cursor-pointer hover:underline">
            <IoMdHelpCircleOutline />
            <p className="text-[15.5px]">Help</p>
          </div>
          <div className="flex gap-1 items-center px-2 text-white cursor-pointer hover:underline">
            <IoMdSettings />
            <p className="text-[15.5px]">Settings</p>
          </div>
        </div>
      </div>
    </>
  );
}
