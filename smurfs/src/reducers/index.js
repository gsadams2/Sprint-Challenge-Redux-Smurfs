/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCHING,
  SUCCESS,
  FAILURE,
  ADDING_SMURF,
  SMURF_ADDED,
  DELETING_SMURF,
  SMURF_DELETED
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  smurfAdded: false,
  error: null,
  deletingSmurf: false,
  smurfDeleted: false
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case ADDING_SMURF:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: true,
        smurfAdded: false
      };
    case SMURF_ADDED:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        smurfAdded: true
      };
    case DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: true
      };
    case SMURF_DELETED:
      return {
        ...state,
        smurfs: action.payload,
        deletingSmurf: false,
        smurfDeleted: true
      };
    default:
      return state;
  }
};

export default reducers;
