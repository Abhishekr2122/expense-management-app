import { useContext, createContext } from "react";

export const AppData = createContext({});

export function useExpenseData() {
  const data = useContext(AppData);
  return data;
}
