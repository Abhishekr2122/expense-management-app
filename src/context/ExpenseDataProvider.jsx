import { useState } from "react";
import { AppData } from "../utils/useExpenseData";

export default function ExpenseDataProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userType, setUserType] = useState("");

  const value = {
    isModalOpen,
    setIsModalOpen,
    userType,
    setUserType,
  };

  return <AppData.Provider value={value}>{children}</AppData.Provider>;
}
