import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  transaction: []
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // action
  function deleteTransaction(id) {
    dispatch({
        type: "Delete_Transaction",
        payload: id
    });
    }
    
    function addTransaction(transaction) {
        dispatch({
            type: "Add_Transaction",
            payload: transaction
        });
      }
    

  return (
      <GlobalContext.Provider value={{
          transaction: state.transaction,
          deleteTransaction,
          addTransaction
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
