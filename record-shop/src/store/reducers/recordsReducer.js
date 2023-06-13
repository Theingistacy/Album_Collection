// This code defines the initial state and the reducer function for managing the records state.

// Initial state for the records
export const recordsInitialState = {
  data: [],
};

// Reducer function for handling actions and updating the records state
export const recordsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_RECORDS_SUCCESS":
      // If the action type is "FETCH_RECORDS_SUCCESS", update the state with the data from the action payload
      return {
        data: action.payload,
      };

    default:
      // If the action type is not recognized, return the current state without any changes
      return state;
  }
};
