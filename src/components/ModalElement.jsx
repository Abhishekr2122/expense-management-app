import { useRef } from "react";

import { createPortal } from "react-dom";

import { FaUserTie } from "react-icons/fa";

import { TbCategory } from "react-icons/tb";

import { FaOrcid } from "react-icons/fa6";

import { CiMoneyCheck1 } from "react-icons/ci";

import { GrStatusCriticalSmall } from "react-icons/gr";

import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

import { useExpenseData } from "../utils/useExpenseData";

export default function ModalElement({ setExpenseData }) {
  const { isModalOpen, setIsModalOpen } = useExpenseData();
  const empId = useRef(859680);
  if (isModalOpen) {
    return createPortal(
      <ModalForm
        empId={empId}
        setIsModalOpen={setIsModalOpen}
        setExpenseData={setExpenseData}
      />,
      document.body
    );
  }
}

function ModalForm({ setIsModalOpen, empId, setExpenseData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function handleFormData(data) {
    setExpenseData(function (prevState) {
      return [data, ...prevState];
    });

    toast.success("Expense Added Successfully");
    reset();
    setIsModalOpen(false);
    empId.current = empId.current + 1;
  }

  return (
    <div className="w-screen h-screen flex itmes-center justify-center bg-[#dee4e46e] absolute top-0 left-0">
      <form
        className=" w-[50%] h-auto flex flex-col justify-center items-center "
        onSubmit={handleSubmit(handleFormData)}
      >
        <div className=" w-[65%] flex flex-col gap-2 p-6 bg-white rounded-md">
          <label className="text-start">Employee-Name</label>
          <div className="flex gap-1 items-center border-1 rounded-md p-1">
            <FaUserTie />
            <input
              id="employeeName"
              type="text"
              placeholder="Enter name"
              className="outline-none"
              {...register("employeeName", {
                required: "This field is required",
              })}
            />
          </div>
          {errors?.employeeName?.message ? (
            <p className="text-red-500">{errors.employeeName.message}</p>
          ) : null}
          <label>Employee-Id</label>
          <div className="flex gap-1 border-1 rounded-md p-1 items-center">
            <FaOrcid />
            <input
              id="employeeId"
              type="text"
              value={empId.current + 1}
              className="outline-none"
              readOnly
              {...register("employeeId")}
            />
          </div>

          <label>Expense Category</label>
          <div className="flex gap-1 border-1 rounded-md p-1 items-center">
            <TbCategory />
            <input
              id="expenseCategory"
              type="text"
              placeholder="Enter Category"
              className="outline-none"
              {...register("expenseCategory", {
                required: "This field is required",
              })}
            />
          </div>
          {errors?.category?.message ? (
            <p className="text-red-500">{errors.category.message}</p>
          ) : null}
          <label>Amount</label>
          <div className="flex gap-1 border-1 rounded-md p-1 items-center">
            <CiMoneyCheck1 />
            <input
              id="amount"
              type="number"
              placeholder="Enter amount"
              className="outline-none"
              {...register("amount", {
                required: "This field is required",
                validate: function (value) {
                  if (value < 1) {
                    return "Amount should be greater than 1";
                  }
                },
              })}
            />
          </div>
          {errors?.amount?.message ? (
            <p className="text-red-500">{errors.amount.message}</p>
          ) : null}
          <label>Date</label>
          <div className="border-1 rounded-md p-1">
            <input
              id="date"
              type="date"
              className="outline-none"
              {...register("date", { required: "This field is required" })}
            />
          </div>
          {errors?.date?.message ? (
            <p className="text-red-500">{errors.date.message}</p>
          ) : null}
          <label>Status</label>
          <div className="flex items-center gap-1 p-1 rounded-md border-1">
            <GrStatusCriticalSmall />
            <input
              id="status"
              type="text"
              className="outline-none"
              value={"Pending"}
              readOnly
              {...register("status")}
            />
          </div>

          <div className="flex justify-between p-2">
            <button
              className="px-4 py-1 bg-gray-700 text-white rounded-md cursor-pointer"
              type="submit"
            >
              Submit
            </button>
            <button
              className="px-4 py-1 bg-red-700 text-white rounded-md cursor-pointer"
              onClick={function () {
                reset();
                setIsModalOpen(false);
              }}
              type="reset"
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
