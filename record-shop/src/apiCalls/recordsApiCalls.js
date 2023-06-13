import axios from "axios";

/* 
    This code defines an asynchronous function called getAllRecords 
    that fetches records data from a JSON file using Axios and 
    updates the records state.
*/

const getAllRecords = async (dispatchRecords) => {
  const response = await axios.get("data.json");

  /* 
    dispatchRecords is a function that is passed as a parameter 
    to the getAllRecords function. It is used to update the records 
    state by dispatching an action.
*/

  await dispatchRecords({
    type: "FETCH_RECORDS_SUCCESS",
    payload: response.data,
  });

  /* 
    { type: "FETCH_RECORDS_SUCCESS", payload: response.data } represents an action object.
     An action is a plain JavaScript object that describes the type of action to 
     be performed and carries additional data (payload) if needed.
*/
};

export default getAllRecords;
