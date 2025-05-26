import { useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import TableHeader from "../ui/TableHeader";
import { MdDelete } from "react-icons/md";
import { IoMdSwap } from "react-icons/io";
import { useExpenseData } from "../utils/useExpenseData";
import { useState } from "react";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { FaSortNumericDown } from "react-icons/fa";
import { FaSortNumericDownAlt } from "react-icons/fa";

export default function ExpenseTable({ setExpenseData, expenseData }) {
  const [crrBtn, setCrrBtn] = useState(0);
  const selectedSortedOption = useRef(null);
  const sortByOptions = [
    { elem: <FaSortAlphaDown />, value: "a" },
    { elem: <FaSortAlphaDownAlt />, value: "z" },
    { elem: <FaSortNumericDown />, value: 1 },
    { elem: <FaSortNumericDownAlt />, value: 9 },
  ];
  const btnQuantity = Math.ceil(expenseData.length / 8);
  const btnArr = [];

  const paginatedExpenseData = expenseData.filter(function (citem, i) {
    return i + 1 > 8 * crrBtn && i < crrBtn * 8 + 8;
  });

  for (let i = 0; i < btnQuantity; i++) {
    btnArr.push(
      <button
        key={i}
        className={`border-1  px-2 rounded-md cursor-pointer ${
          i === crrBtn ? "bg-gray-500 text-white" : "bg-white"
        } duration-[0.6s]`}
        onClick={function () {
          setCrrBtn(i);
        }}
      >
        {i + 1}
      </button>
    );
  }

  const { userType } = useExpenseData();

  function handleRejected(index, dataObj) {
    dataObj.status = "Rejected";
    const newDataObj = dataObj;
    expenseData[index] = newDataObj;
    setExpenseData(function (prevState) {
      return [...prevState];
    });
  }

  function handleApproved(index, dataObj) {
    dataObj.status = "Approved";
    const newDataObj = dataObj;
    expenseData[index] = newDataObj;
    setExpenseData(function (prevState) {
      return [...prevState];
    });
  }

  function handleSorted(value) {
    if (value === "a") {
      const sortedArray = [
        ...expenseData.sort(function (a, b) {
          return a.employeeName
            .toLowerCase()
            .trim()
            .split(" ")[0]
            .localeCompare(b.employeeName.toLowerCase().trim().split(" ")[0]);
        }),
      ];

      setExpenseData(sortedArray);
    } else if (value === "z") {
      const sortedArray = [
        ...expenseData.sort(function (a, b) {
          return b.employeeName
            .toLowerCase()
            .trim()
            .split(" ")[0]
            .localeCompare(a.employeeName.toLowerCase().trim().split(" ")[0]);
        }),
      ];

      setExpenseData(sortedArray);
    } else if (value === 1) {
      const sortedArray = [
        ...expenseData.sort(function (a, b) {
          return a.amount - b.amount;
        }),
      ];
      console.log(
        "This is the Sorted Array numerically in increasing order",
        sortedArray
      );
      setExpenseData(sortedArray);
    } else {
      const sortedArray = [
        ...expenseData.sort(function (a, b) {
          return b.amount - a.amount;
        }),
      ];

      setExpenseData(sortedArray);
    }
  }

  return (
    <div className=" w-[98%] h-full rounded-t-md bg-white  flex flex-col items-center">
      <div className="flex px-4 py-2 justify-between w-full">
        <div className="flex items-center gap-1 rounded-md p-1 bg-[#f4f6f6]">
          <IoIosSearch />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
        <div className="flex gap-8">
          {sortByOptions.map(function (citem, i) {
            return (
              <button
                key={i}
                className={`flex items-center ${
                  selectedSortedOption.current === citem.value
                    ? "bg-gray-600 text-white"
                    : "bg-[#edf1f1] text-black"
                } px-3 py-1 rounded-md gap-1 cursor-pointer duration-[0.7s]`}
                onClick={function () {
                  handleSorted(citem.value);
                  selectedSortedOption.current = citem.value;
                }}
              >
                Sort By{citem.elem}
              </button>
            );
          })}
        </div>
      </div>
      <table className="w-[98%] bg-[#f4f6f6] rounded-md ">
        <tbody>
          <TableHeader userType={userType} />
          {paginatedExpenseData?.map(function (citem, i) {
            return (
              <tr
                className="cursor-pointer hover:bg-white duration-[0.8s]"
                key={i}
              >
                <td>
                  <div className="p-2">{citem.employeeName}</div>
                </td>
                <td>
                  <div className="p-2">{citem.employeeId}</div>
                </td>
                <td>
                  <div className="p-2">{citem.expenseCategory}</div>
                </td>
                <td>
                  <div className="p-2">{citem.amount}</div>
                </td>
                <td>
                  <div className="p-2">{citem.date}</div>
                </td>
                <td>
                  <div
                    className={`p-2 ${
                      citem.status === "Approved"
                        ? "text-green-400"
                        : citem.status === "Rejected"
                        ? "text-red-700"
                        : "text-orange-500"
                    }`}
                  >
                    {citem.status}
                  </div>
                </td>
                {userType === "admin" ? (
                  <td>
                    <div className="flex gap-1 py-1 px-2">
                      <MdDelete
                        type="button"
                        onClick={function () {
                          handleRejected(i, citem);
                        }}
                      />

                      <IoMdSwap
                        type="button"
                        onClick={function () {
                          handleApproved(i, citem);
                        }}
                      />
                    </div>
                  </td>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className=" w-[98%] h-full flex items-center justify-end px-6 ">
        <button
          className="cursor-pointer"
          disabled={crrBtn == 0 ? true : false}
          onClick={function () {
            setCrrBtn(function (prevState) {
              return prevState - 1;
            });
          }}
        >
          <IoIosArrowBack className="text-xl" />
        </button>
        <div className="flex gap-2">{btnArr}</div>
        <button
          className="cursor-pointer"
          disabled={crrBtn === btnQuantity - 1 ? true : false}
          onClick={function () {
            setCrrBtn(function (prevState) {
              return prevState + 1;
            });
          }}
        >
          <IoIosArrowForward className="text-xl" />
        </button>
      </div>
    </div>
  );
}
