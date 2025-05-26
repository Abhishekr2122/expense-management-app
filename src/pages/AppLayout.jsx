import Dashboard from "../components/Dashboard";
import ModalElement from "../components/ModalElement";

export default function AppLayout({
  expenseData,
  setExpenseData,
  setIsLoggedIn,
}) {
  return (
    <>
      <Dashboard
        expenseData={expenseData}
        setExpenseData={setExpenseData}
        setIsLoggedIn={setIsLoggedIn}
      />
      <ModalElement setExpenseData={setExpenseData} />
    </>
  );
}
