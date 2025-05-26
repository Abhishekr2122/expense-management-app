import { HiMiniDocumentCurrencyRupee } from "react-icons/hi2";
import { SlOptions } from "react-icons/sl";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function ExpenseCard({
  expenseAmount,
  cardHeading,
  type,
  percentage,
}) {
  return (
    <div className="p-3 flex flex-col gap-2 bg-[#ffffff] rounded-md cursor-pointer hover:shadow-xl duration-[0.5s]">
      <div className="flex items-center justify-between  ">
        <h2 className="flex">
          {" "}
          <HiMiniDocumentCurrencyRupee className="text-2xl" />
          <span className="text-md">{cardHeading}</span>
        </h2>
        <SlOptions />
      </div>
      <h3 className="text-[20px] font-medium">💸{expenseAmount}</h3>
      <div className="flex items-center gap-2">
        {expenseAmount != 0 ? (
          <p className="flex items-center">
            <FaArrowAltCircleUp />
            {percentage}%
          </p>
        ) : null}

        {expenseAmount != 0 ? (
          <p>Increase since last {type}</p>
        ) : (
          "No increase since yesterday"
        )}
      </div>
    </div>
  );
}
