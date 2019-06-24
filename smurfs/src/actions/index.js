/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from "axios";
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const ADDING_SMURF = "ADDING_SMURF";
export const SMURF_ADDED = "SMURF_ADDED";
export const DELETING_SMURF = "DELETING_SMURF";
export const SMURF_DELETED = "SMURF_DELETED";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FAILURE }));
};

export const addSmurf = data => {
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    axios
      .post(`http://localhost:3333/smurfs/`, data)
      .then(res => {
        dispatch({ type: SMURF_ADDED, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FAILURE, payload: "Error with adding" });
      });
  };
};

export const deleteSmurf = id => {
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        dispatch({ type: SMURF_DELETED, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FAILURE, payload: "Error with deleting" });
      });
  };
};
