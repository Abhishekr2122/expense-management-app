import { useState } from "react";
import "./App.css";

import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import AppLayout from "./pages/AppLayout";
import ExpenseDataProvider from "./context/ExpenseDataProvider";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const date = new Date();

  const todaysDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  let tmpExpenseData = [
    {
      employeeName: "Sarthak Shinde",
      employeeId: "859674",
      expenseCategory: "Travel",
      amount: 800,
      date: todaysDate,
      status: "Pending",
    },
    {
      employeeName: "Riya Arya",
      employeeId: "859675",
      expenseCategory: "Food",
      amount: 500,
      date: todaysDate,
      status: "Pending",
    },
    {
      employeeName: "Rohan Pawar",
      employeeId: "859676",
      expenseCategory: "Food",
      amount: 500,
      date: todaysDate,
      status: "Pending",
    },
    {
      employeeName: "Anmol Tuli",
      employeeId: "859677",
      expenseCategory: "Office Accessory",
      amount: 300,
      date: todaysDate,
      status: "Pending",
    },
    {
      employeeName: "Damini Nikhare",
      employeeId: "859679",
      expenseCategory: "Food",
      amount: 700,
      date: todaysDate,
      status: "Pending",
    },
    {
      employeeName: "Vaibhav Bengade",
      employeeId: "859678",
      expenseCategory: "Travel",
      amount: 700,
      date: todaysDate,
      status: "Pending",
    },

    {
      employeeName: "Sanika Thorat",
      employeeId: "859679",
      expenseCategory: "Travel",
      amount: 500,
      date: todaysDate,
      status: "Pending",
    },
    {
      employeeName: "Mayuri Sannakke",
      employeeId: "859680",
      expenseCategory: "Office Accessory",
      amount: 500,
      date: todaysDate,
      status: "Pending",
    },
  ];

  const [expenseData, setExpenseData] = useState(tmpExpenseData);

  return (
    <ExpenseDataProvider>
      <main className="bg-[#e3e7e7]">
        {isLoggedIn ? (
          <AppLayout
            expenseData={expenseData}
            setExpenseData={setExpenseData}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn} />
        )}

        <ToastContainer
          position="top-center"
          autoClose={700}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </main>
    </ExpenseDataProvider>
  );
}

export default App;
