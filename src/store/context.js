import { createContext, useEffect, useReducer } from "react";
import { recordsInitialState, recordsReducer } from "./reducers/recordsReducer";
import getAllRecords from "../apiCalls/recordsApiCalls";
import { cartInitialState, cartReducer } from "./reducers/cartReducer";

export const DataContext = createContext();

/* 
    This component sets up the records state using the useReducer hook, 
    fetches the initial records using the getAllRecords function, 
    and provides the records state to its child components through 
    a context called DataContext.
*/

/* 
    The useReducer hook takes two arguments: a reducer function and an initial state value. 
    The reducer function is responsible for specifying how the state should be updated 
    based on different actions. The initial state is the starting point for your state.
*/

/* 
    useReducer hook uses the dispatch function to update the state.

    When you call dispatch, the reducer function is called with the current state 
    and the action object you provided. 
    
    The new state returned by the reducer function is then assigned to state, 
    causing the component to update and reflect the new value.
*/

const ContextProvider = ({ children }) => {
  //! Records Reducer
  // Using the `useReducer` hook to manage the state of the records
  const [recordsState, dispatchRecords] = useReducer(
    recordsReducer,
    recordsInitialState
  );

  //! Cart Reducer
  const [cartState, dispatchCart] = useReducer(cartReducer, cartInitialState);

  // useEffect hook is used to perform a side effect when the component mounts
  useEffect(() => {
    // Calling the `getAllRecords` function to fetch records and update the records state
    getAllRecords(dispatchRecords);
  }, []);

  // Rendering a `DataContext.Provider` component to provide the records state as context to its children
  return (
    <DataContext.Provider value={{ recordsState, cartState, dispatchCart }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
