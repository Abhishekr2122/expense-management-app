import Header from "./Header";
import Sidebar from "./Sidebar";
import ExpenseTable from "./ExpenseTable";
import { useExpenseData } from "../utils/useExpenseData";
import ExpenseCard from "./ExpenseCard";

export default function Dashboard({
  setExpenseData,
  expenseData,
  setIsLoggedIn,
}) {
  const { setIsModalOpen, userType } = useExpenseData();
  const totalExpense = expenseData
    .filter(function (citem) {
      return citem.status === "Approved";
    })
    .reduce(function (sum, citem) {
      return Number(sum) + Number(citem.amount);
    }, 0);

  return (
    <main className="h-screen w-screen items-center flex">
      <Sidebar />
      <div className=" w-screen  flex flex-col items-center h-screen  ">
        <Header setIsLoggedIn={setIsLoggedIn} />
        <div className="w-[98%]">
          <div className="flex items-center justify-between w-full  p-1 px-4 mt-1">
            <h2 className="text-lg font-medium text-gray-700">All Expenses</h2>
            <button
              className="bg-gray-700 text-white py-1 px-2 rounded-md cursor-pointer  hover:bg-gray-800  duration-[0.8s]"
              onClick={function () {
                setIsModalOpen(true);
              }}
            >
              Add Expense
            </button>
          </div>
          <div className="  grid grid-cols-4 gap-4 p-2">
            <ExpenseCard
              expenseAmount={totalExpense}
              cardHeading="Total Expense"
              type="Yesterday"
              percentage="5"
            />

            <ExpenseCard
              expenseAmount={3878}
              cardHeading="Weekly Expense"
              type="Week"
              percentage="10"
            />

            <ExpenseCard
              expenseAmount={2587}
              cardHeading="Monthly Expense"
              type="Month"
              percentage="15"
            />

            <ExpenseCard
              expenseAmount={6358}
              cardHeading="Yearly Expense"
              type="Year"
              percentage="22"
            />
          </div>
        </div>
        <ExpenseTable
          userType={userType}
          expenseData={expenseData}
          setExpenseData={setExpenseData}
        />
      </div>
    </main>
  );
}
