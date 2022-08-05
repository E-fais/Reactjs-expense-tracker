import { createContext, useState } from "react";

export const transactionContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "food",
      amount: -500,
    },
    {
      id: 2,
      title: "salary",
      amount: 5500,
    },
    {
      id: 3,
      title: "rent",
      amount: -700,
    },
  ]);
  return (
    <transactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </transactionContext.Provider>
  );
};
